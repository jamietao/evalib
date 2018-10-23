# Service depends on JDK-8.
FROM java:8

# The docker image version. It will be overwriten by docker build command.
ARG BUILD_VERSION=1.0

# Environment variable.
ENV EVALIB_HOME "/var/evalib/${BUILD_VERSION}/"
ENV EVALIB_JAR_FILE "evalib-web-admin-0.0.1-SNAPSHOT.jar"

# Service docker image labels
LABEL Version=${BUILD_VERSION}
LABEL Author="Jinqiang Tao"
LABEL Description="Evaluation library docker service."

# The working dir.
WORKDIR	$EVALIB_HOME

# Copy the service jar file and startup script.
# The source dir is current Dockerfile.
COPY ./docker/evalib-startup.sh	./
COPY ./evalib-web-admin/target/evalib-web-admin-0.0.1-SNAPSHOT.jar	./

# Service will be running and listening on 80 port.
EXPOSE 80

# When container running, start the springboot application.
CMD JAVA -jar $EVALIB_HOME$EVALIB_JAR_FILE
