FROM openjdk:11-jre-slim

COPY ./target/my_portfolio-0.0.1-SNAPSHOT.jar /usr/src/portfolio_dev/

WORKDIR /usr/src/portfolio_dev

EXPOSE 8084

CMD ["java", "-jar", "my_portfolio-0.0.1-SNAPSHOT.jar"]


