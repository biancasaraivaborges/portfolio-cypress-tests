<h1> Portfolio-Cypress </h1>

## About the Project
This project is part of my learning about automated testing using [Cypress](https://www.cypress.io/).


## Getting Started

### 1. Installation of `Node.js and npm`

Before diving into the project, ensure that you have Node.js - commonly referred to as Node - installed on your machine. Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing you to execute JavaScript code outside of a web browser. And NPM (Node Package Manager) is the package manager for Node.js, used to install, share, and manage project dependencies in JavaScript.
If you haven't already, you can download it from [nodejs.org](https://nodejs.org/). To verify your Node.js installation, open your terminal and type:
`node --version` or `node -v`. If a version number is displayed, Node.js is successfully installed on your system.

### 2. Optional: `nvm-windows`

If you want to manage different versions of Node.js on your system, you can consider installing `nvm-windows`. This is a version manager for Node.js on Windows, allowing easy switching between different Node.js versions. Download `nvm-windows` [here](https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe).

In CMD, type the command `nvm install` along with the Node version you want to install; in this case, the version will be 16.13.1: `nvm install 16.13.1`. You can use the following command to see which versions are being used and which one is installed on the computer: `nvm ls`

### 3. Cypress Installation

With Node installed and configured, let's install Cypress. Accessing the [official Cypress page](https://docs.cypress.io/guides/getting-started/installing-cypress), we find the following command for installation:

```
npm install cypress --save-dev
```

Once the installation is complete, you can run the following command to see Cypress in action:

```
npx cypress open
```


### 4. Create a Cypress Project

In the terminal, use the command `npx cypress open` to start Cypress and press "Enter" to execute.
In the part that says E2E (end-to-end) testing, choose the option `cypress\fixtures\example.json`.
After that, click on the desired browser, such as Chrome, and click "Start E2E Testing in Chrome."

On the "Create your first spec" screen, create a test from scratch by clicking "Create New Spec" and naming it XXXXX.cy.js. After clicking "Create spec," the framework displays the code structure that will be created within this project. After running, a panel opens on the left where you can check that the test passed. Additionally, Cypress explains that the test is visiting the URL example.cypress.io.

### 5. Cypress Instructions

To learn more about the initial installation and configuration steps, [click here](https://docs.cypress.io/guides/getting-started/installing-cypress) to access the official Cypress documentation, which provides more detailed information on some advanced configurations by operating system, as well as usage in containers and continuous integration.


### Code Structure

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. Build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running Unit Tests

Run `ng test` to execute unit tests via [Karma](https://karma-runner.github.io).

### Running End-to-End Tests

Run `ng e2e` to execute end-to-end tests via [Protractor](http://www.protractortest.org/).

### Additional Help

For more help on Angular CLI, use `ng help` or check the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

