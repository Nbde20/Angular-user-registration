FROM openjdk:8-jdk-alpine
EXPOSE 9090
COPY target/spring-boot-docker.jar spring-boot-docker.jar
ENTRYPOINT ["java","-jar","spring-boot-docker.jar"]