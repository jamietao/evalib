-- add the UUID generate extension. 
create extension if not exists "uuid-ossp";

-- create the user table: used to store the system users registered.
drop table if exists t_user cascade;
create table t_user
(
   id uuid default uuid_generate_v4(),
   name character varying(50) not null,
   description character varying(100), 
   created_at timestamp without time zone not null default now(),
   updated_at timestamp without time zone not null default now(),

   constraint pk_user primary key(id),
   constraint uq_user_name unique(name)
);

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

   constraint pk_choicequestion primary key(id),
   constraint fk_choicequestion_user foreign key(created_by) references t_user(id)
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
