# Portfolio Application -AngularJS

## About

This is a single page portfolio web application built on angularjs. You can use this application as a base to build your portfolio website in angularJS. 
A Lot of cool features have been included which makes coding the application supper easy. 
Some of the technologies I have used are - AngularJS, Webpack, babel, Karma and ESLint. I plan to intigrate Protractor to have some e2e test in here soon.
My intention is to have this small potfolio application adhere to the same standars as a production ready web application.

## Rules and Guidelines

These rules establish and enforce best practices
in order to improve code quality, maintainability, and readability.
All contributors are expected to take the time to learn and apply them.
Adherence is mandatory. Please refactor non-compliant code.

* **Unit tests are mandatory**.  Unit tests are the foundation of our testing strategy.
  They provide a way to test business logic and components in isolation while controlling all conditions and expectations.
  See the [examples](examples/unit) module for examples of different types of unit tests.
* **Code reviews are mandatory**. Code reviews are performend through GitHub's [Pull Requests](https://help.github.com/articles/using-pull-requests/).
  GitHub provides an easy-to-use tool for reviewing and maintaining commit history by linking commits
  with their associated pull requests.
* **Code style is mandatory**. Style should be enforced through linting and code reviews.
  * [Javascript Style Guide](https://github.com/airbnb/javascript/tree/master/es5)
  * [Angular Style Guide](https://github.com/johnpapa/angular-styleguide/tree/master/a1)
  * [CSS BEMS-style naming](http://getbem.com/naming/)

## First Time Contributors

Your first PR is an important one, and to help you acclimate to our coding style and patterns it is
best to keep it simple. If you are new to the codebase, we ask that you keep your first PR **under
500 lines max**.

## Setup the environment

### You need git, nodejs and yarn pre installed on your machine.

#### Git
* On macOS: install Xcode toolchain: `xcode-select --install`
* Else use this. https://git-scm.com/book/en/v2/Getting-Started-Installing-Git

#### NodeJS

node can be installed in a variety of ways. you can use brew, nvm or install NodeJS directly.

I have used brew. More info
https://brew.sh/

then  run `brew install node`

#### Yarn

we are using yarn as a packagemanager which is an extention on npm.

run `brew install yarn`






## First Time Setup

#### 1. Clone this repository (this creates the 'origin' remote)
* Run `git clone <mainline-url>`

  ```
  git clone git@github.com:shravanshetty5/Portfolio-angularjs.git
  ```

#### 1a. Set your author name and email (if you haven't already done so)
* Run `git config ...` to set your author name and email for this repo:

  ```
  cd ./Portfolio-angularjs
  git config user.name "John Doe"
  git config user.email johndoe@cisco.com
  ```

  ...or alternatively, set them globally on your work machine (a better choice if you work with multiple repos):

  ```
  cd ./Portfolio-angularjs
  git config --global user.name "John Doe"
  git config --global user.email johndoe@cisco.com
  ```

#### 2. Create a fork (on sqbu-github)
* Select the 'Fork' button

#### 3. Set a remote to point at your fork
* Run `git remote add <your github id> <your-forks-url>`

  ```
  git remote add johndoe git@github.com:johndoe/Portfolio-angularjs.git

  ```
#### 4. Install project dependencies

run `yarn`

#### 5. Start the Project

run `yarn start`