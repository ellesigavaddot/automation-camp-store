# Quality Camp Store - Automation Project

This project was created to test the [Quality Camp Store Website](https://ui-automation-camp.vercel.app/) using Cypress testing framework

## Get this project

```console
git clone https://github.com/ellesigavaddot/luma-automation-project.git
```

## Installation

This project should availble without a [node_modules] and a [package-lock.json] folder but if that is not the case, be sure to delete these folders as your first step of installation

1. Install all project dependencies with the following command:

```bash
npm install
```

## Execute tests

1. To execute tests via the cypress GUI, run the following command:

```bash
npx cypress open
```

2. To excute all tests via the terminal, run the following commands:

```bash
npx run test
```

```bash
npm test
```

3. To execute individual tests, run the following commands:

```bash
npm run test:spec cypress/e2e/test/name_of_testfile.cy.js
```

4. To excute tests in specific broswer

```bash
npx cypress run --browser firefox
```

## Reporting

Mocha repoerter is being used for this project. In order to run these test with reporting, run the following command:

```bash
npm run test:spec cypress/e2e/test/test.cy.js
```


