# Maven+Karma+Webjars

This is an example project that runs JavaScript unit tests (in this case [Jasmine](http://jasmine.github.io/) tests) driven by the [Karma](http://karma-runner.github.io) test runner during a [Maven](http://maven.apache.org/) build. It also uses [Webjars](http://webjars.org) to manage web-resource dependencies.

This type of setup might be encountered in a Java service + Web UI project for example, or in an enterprise environment where CI builds are standardised around a Java + Maven workflow.

## Technologies / libraries used

* Java 1.7+
* Servlet 3.0
* Maven 3+
* Webjars
* maven-frontend-plugin
* Node.js
* Karma
* Jasmine
* AngularJS

## Getting started

### Required environment

To build and run this project you will need the following environment:

* Java 1.7+ (required for Jetty)
* Maven 3.0+ (tested on Maven 3.0.5)

Optionally:

* An IDE (e.g. Eclipse)
* Node.js (if you want to run other Node packages outside the CI build)

### Running locally

Run the project using the Jetty configuration specified in the POM file:

`>> mvn jetty:run`


Then access the project at:

[http://localhost:8080/maven-karma-webjars-example/index.html](http://localhost:8080/maven-karma-webjars-example/index.html)

*Note* you can also run the application on any [Servlet 3.0](https://today.java.net/pub/a/today/2008/10/14/introduction-to-servlet-3.html) compliant container (e.g. [Apache Tomcat](http://tomcat.apache.org/) etc.).

### Running the CI build

The full CI build, including JS unit test execution, can be run via Maven:

`>> mvn clean install`

## License
This project and all of its contents are release under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).
