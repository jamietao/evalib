# Evaluation Library -  Enjoy the evaluation
## Dependencies
1. Maven 4.0
2. SpringBoot 2.0
3. Postgresql
4. Mybatis 3.4.6

### Issues and Solution
1. SpringBoot cannot server static file - Missing @EnableAutoConfiguration attribute in Application class. 

## Installation
1. Create a database named evalib. Currently it only support postgresql. 
2. Run the sql\schema.sql file to create the required tables.
3. Run teh sql\init_data.sql to insert the intilize data.
