-- add the UUID generate extension. 
create extension if not exists "uuid-ossp";

/* ==============================================================================================================================================

User Management Schema

Required table schemas:
   1. t_user: store the user profile informaiton.
   2. t_login: store the user login information.
   3. t_role: store the system role information. 
   4. t_permission: store the system permission information.
   5. t_role_permission: store the role and permission relationship.
   6. t_user_role:  store the user and role relationship.

=============================================================================================================================================== */

-- create the user table: used to store the system users registered.
drop table if exists t_user cascade;
create table t_user
(
   id uuid default uuid_generate_v4(),
   first_name character varying(50),
   last_name character varying(50),
   birthday date,
   sex smallint not null default 0, -- 0: Male, 1: Female
   email_address character varying(50),
   phone character varying(20),
   city character varying(50),
   avatar_url character varying(1024),
   description character varying(100),    
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),
   
   constraint pk_user primary key(id)
);

-- create the login table: used to store the system login account.
drop table if exists t_login;
create table t_login
(
    id uuid default uuid_generate_v4(),
    username character varying(50) not null,
    password character varying(100) not null,
    user_id uuid not null,
    state smallint not null default 0, -- 0: active, 1: disabled
    last_login_at timestamp without time zone,

    constraint pk_login primary key(id),
    constraint uq_login_username unique(username),
    constraint fk_login_user foreign key(user_id) references t_user(id)
);

-- create the role table.
drop table if exists t_role cascade;
create table t_role
(
   id uuid default uuid_generate_v4(),
   name character varying(50) not null,
   description character varying(500),
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),

   constraint pk_role primary key(id),
   constraint uq_role_name unique(name)
);

-- create the permission table: used to store the permission informaiton. 
drop table if exists t_permission cascade;
create table t_permission
(
   id uuid default uuid_generate_v4(),
   name character varying(50) not null,
   description character varying(500),
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),

   constraint pk_permission primary key(id),
   constraint pk_permission_name unique(name)
);

-- create the role_permission table: used to store the role and permission relationship.
drop table if exists t_role_permission cascade;
create table t_role_permission
(
   role_id uuid not null,
   permission_id uuid not null,

   constraint pk_role_permission primary key(role_id, permission_id),
   constraint fk_rolepermission_role foreign key(role_id) references t_role(id),
   constraint fk_rolepermission_permission foreign key(permission_id) references t_permission(id)   
);

-- create the user_role table: store the user role information.
drop table if exists t_user_role cascade;
create table t_user_role
(
   user_id uuid not null,
   role_id uuid not null,

   constraint pk_user_role primary key(user_id, role_id),
   constraint fk_userrole_user foreign key(user_id) references t_user(id),
   constraint fk_userrole_role foreign key(role_id) references t_role(id)
);


/*===============================================================================
			Evaluation Management Schema

	Required table schemas:
	    1. t_evaluation: store the evaluation information. 
	    2. t_choice_question: store the evaluation choice type questions.
	    3. 

================================================================================*/


-- create the evaluation table: used to store the evaluation user created. 
drop table if exists t_evaluation cascade;
create table t_evaluation
(
   id uuid default uuid_generate_v4(),
   name character varying(50) not null,
   description character varying(100), 
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),
   created_by uuid not null,
   state smallint not null,  -- 0: DRAFT, 1: AUDITING, 2: REJECTED, 3: APPROVED. 

   constraint pk_evaluation primary key(id),
   constraint fk_evaluation_user foreign key(created_by) references t_user(id)
);

-- create table t_choice_question: used to store the choice type questions. 
drop table if exists t_choice_question cascade;
create table t_choice_question
(
   id uuid default uuid_generate_v4(),
   description character varying(500) not null,
   choice_type smallint not null,  -- 0: single choice, 1: multiple choice. 
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),
   created_by uuid not null,
   evaluation_id uuid not null,

   constraint pk_choicequestion primary key(id),
   constraint fk_choicequestion_user foreign key(created_by) references t_user(id),
   constraint fk_choicequestion_evaluation foreign key(evaluation_id) references t_evaluation(id)
);

-- create table t_question_option: used to store the options for choice type question.
drop table if exists t_choice_question_option cascade;
create table t_choice_question_option
(
    id uuid default uuid_generate_v4(),
    choice_question_id uuid not null,
    description character varying(100) not null,
    created_at timestamp without time zone not null default now(), 
    updated_at timestamp without time zone not null default now(),
    created_by uuid not null,

    constraint pk_choicequestionoption primary key(id),
    constraint fk_choicequestionoption_user foreign key(created_by) references t_user(id),
    constraint fk_choicequestionoption_choicequestion foreign key(choice_question_id) references t_choice_question(id)
);

-- create table t_choice_question_answer: used to store the choice type question's answer.
drop table if exists t_choice_question_answer cascade;
create table t_choice_question_answer
(
    id uuid default uuid_generate_v4(),
    choice_question_id uuid not null,
    choice_question_option_id uuid not null,

    constraint pk_choicequestionanswer primary key(id),
    constraint fk_choicequestionanswer_choicequestion foreign key(choice_question_id) references t_choice_question(id),
    constraint fk_choicequestionanswer_choicequestionoption foreign key(choice_question_option_id) references t_choice_question_option(id),
    constraint uq_choicequestionanswer unique(choice_question_id, choice_question_option_id)
);
