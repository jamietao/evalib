--insert sys admin user. --
insert into t_user(id) values('48DB049E-1F86-4B3A-A46F-7014C243BDDC');
insert into t_login(id, username, password, user_id) values('48DB049E-1F86-4B3A-A46F-7014C243BDDC','sysadmin', 'sysadmin', '48DB049E-1F86-4B3A-A46F-7014C243BDDC');

insert into t_role(id, name) values('04956B9A-4FF8-4C3A-9BBA-B40FCE174EC0', 'admin');
insert into t_user_role(user_id, role_id) values('48DB049E-1F86-4B3A-A46F-7014C243BDDC', '04956B9A-4FF8-4C3A-9BBA-B40FCE174EC0');