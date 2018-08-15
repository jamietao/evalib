# Evaluation Library -  Enjoy the evaluation
## Dependencies
1. Maven 4.0
2. SpringBoot 2.0
3. Postgresql
4. Mybatis 3.4.6

## Build
1. Go to evalib-server folder
2. Run maven command to generate the package: mvn clean package
3. The package will be generated, and use the package located in evalib-server\evalib-web-admin\target.

## Installation
1. Create a database named evalib. Currently it only support postgresql. 
2. Run the sql\schema.sql file to create the required tables.
3. Run teh sql\init_data.sql to insert the intilize data.
4. Get the package generated and run command: java -jar <packageName>
  
### Issues and Solution
[] SpringBoot cannot server static file - Missing @EnableAutoConfiguration attribute in Application class. 
[] mybatis typealias registration use package works fine when debug in eclipse but it does not work when run from jar package. 

