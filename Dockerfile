FROM openjdk:17-oracle
WORKDIR /app
COPY target/spring-keycloak-0.0.1-SNAPSHOT.jar /app/app.jar

CMD ["java", "-jar", "app.jar"]
EXPOSE 8282
