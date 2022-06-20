# SCALIO BACKEND CHALLENGE

## IMPORTANT

The first request to the server takes a while, since the application deployed in Glitch is sleeping until there are requests (due to the use of a free account)

## Description

The goal is to create a simple web application which makes a request to an API, parses the response, and displays the result in the UI.   

## Architecture

![alt text](https://cdn-media-1.freecodecamp.org/images/oVVbTLR5gXHgP8Ehlz1qzRm5LLjX9kv2Zri6)

### Requirements

- npm
- node 10+

### Tech Stack

Name | Description | Useful Resources
--- | --- | ---
TypeScript | Is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.| [Official site](https://www.typescriptlang.org/) resources.
NestJS | Is a framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript (yet still enables developers to code in pure JavaScript) and combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).| [Official site](https://docs.nestjs.com/) resources.
Pipes | A pipe is a class annotated with the @Injectable() decorator, which implements the PipeTransform interface.| [Official site](https://docs.nestjs.com/pipes) resources.
Jest | Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.| [Official site](https://jestjs.io/en/) resources.  <br/> - [Testing](https://docs.nestjs.com/fundamentals/testing#testing) NestJS resource.
Supertest | The motivation with this module is to provide a high-level abstraction for testing HTTP, while still allowing you to drop down to the lower-level API provided by superagent.| [Official site](https://github.com/visionmedia/supertest) resources.
OpenAPI |The OpenAPI specification is a language-agnostic definition format used to describe RESTful APIs. Nest provides a dedicated module which allows generating such a specification by leveraging decorators.| [Official site](https://docs.nestjs.com/openapi/introduction) resources.

### Structure
```
.
├── docs
│   ├── *.svg
├── src
│   ├── application
│   │   ├── controller
│   │   │   └── *.controller.ts
│   │   ├── dto
│   │   │   └── *.dto.ts
│   │   ├── interceptors
│   │   │   └── *.interceptor.ts
│   │   └── middleware
│   │       └── *.middleware.ts
│   ├── domain
│   │   ├── entities
│   │   │   └── *.entity.ts
│   │   └── service
│   │       └── *.service.ts
│   ├── infrastructure
│   │   ├── models
│   │   │   └── *.model.ts
│   │   └── repository
│   │       └── *.repository.ts
│   ├── main.ts
│   ├── app.module.ts
│   ├── constants.ts
├── test
├── jest.config.json
├── nest-cli.json
├── package.json
├── README.md
├── tsconfig.build.json
├── tsconfig.json
└── tslint.json

```

### Requirement before run

- This project has frontend project. You can access in this link: https://github.com/JaviAPS94/scalio-challenge-frontend
- Run the frontend with the guidelines given in the Readme.

### TODO list

- [x] After the app is launched, the Home screen is displayed
- [x] The user enters a random Integer value into to the 'Id' field and taps the `Send` button
- [x] The app sends a https request to http://localhost:3000/posts/{id} , where {id} is the integer value entered by the user.
  NOTE: The complete Posts Data can be found at the bottom of this evaluation and should be accessible from the http://localhost:3000/posts/ endpoint
- [x] The app then parses the response from the server. If both the 'title' and 'body' fields exists, the Details screen should open and display the corresponding values. If either of the fields are null/empty/absent, an error message should be displayed on the Home screen.

## Getting Started

1. Clone the backend repository

```
git clone git@github.com:JaviAPS94/scalio-challenge.git
```

2. In root directory run

  ```bash
$ npm install 
```

3. Run build

  ```bash
$ npm run build 
```

4. Start Application

  ```bash
$ npm run start 
```
### Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# coverage
$ npm run test:cov

```

### Result of coverage tests

![Project Structure](docs/coverage_tests.svg)

### Contributors

- Alex Pinaida

### Notes

This app was deployed on Glitch and you can use in local

#### Host

- URL Glitch: https://shore-bronze-lip.glitch.me
- URL local: localhost:4000

#### OpenAPI route

- URL Glitch: https://shore-bronze-lip.glitch.me/api
- URL local: localhost:4000/api

### License

This project is property of Alex Pinaida