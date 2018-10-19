FROM java:8

ENV EVALIB_SERVICE_HOME /var/evalib/
ENV JAR_FILE evalib-service.jar

# When container running, start the springboot application.
WORKDIR	$EVALIB_SERVICE_HOME
ENTRYPOINT	["sh", "-c"]
CMD	["java -jar $JAR_FILE"]



