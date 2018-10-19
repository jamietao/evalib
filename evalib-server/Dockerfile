# Service depends on JDK-8.
FROM java:8

# The docker image version. It will be overwriten by docker build command.
ARG BUILD_VERSION=1.0

# Environment variable.
ENV EVALIB_HOME /var/evalib/${BUILD_VERSION}/
ENV EVALIB_SERVICE_FILE evalib-service.jar

# Service docker image labels
LABEL Version=${BUILD_VERSION}
LABEL Author="Jinqiang Tao"
LABEL Description="Evaluation library docker service"

# The working dir.
WORKDIR	$EVALIB_HOME

# Copy the service jar file and startup script.
COPY evalib-startup.sh	evalib-server/docker .
COPY evalib-web-admin-0.0.1-SNAPSHOT.jar evalib-server/evalib-web-admin/target	./evalib-web-admin.jar

# Service will be running and listening on 80 port.
EXPOSE 80

# When container running, start the springboot application.
ENTRYPOINT ["tini", "--", "${EVALIB_HOME}evalib-startup.sh"]