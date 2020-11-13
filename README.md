

# Table of Contents
  * [Introduction](#Introduction)
  * [Usage](#Usage)
  * [Developers](#Developers)
  * [Issues](#Issues)
  * [Team](#Team)
  * [License](#License)

## Introduction

Introduction

#### Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## Usage



## Developers




#### Getting Started

Begin by making a fork of the repo from <link> and clone to your local drive. 
<br>
run yarn install to download dependences and update your package.json with the CLI scripts.
<br>

```bash
yarn install
```
<br>

Take some time to familiarize yourself with the package.Json file.
<br>

Before building and starting the file, create a local database called <b>truckstop</b> in <b>PostgresQL</b>
<br>

```
$createDB truckstop
```
<br>
From here you can begin to build the app by running the following scripts:
<br>

```bash
yarn build
```

```bash
yarn start
```
<br>
The yarn build file will compile the code so that we can execute with yarn start. When yarn start runs, it will automatically run the knex migrations files and build the tables within database truckstop. Next it will run the knex seeding files to populate your local database. 
<br>
At this point the application will run on <a href= "http://localhost:3000/">Localhost:3000 </a>
<br>

#### Creating and running Migrations
to make a migration, once dependancies have been installed, run the following in your node terminal:

```bash
yarn migrate:make <migration_description>
```

This wil generate a Knex migration file. The migration will run upon the next start up of the app.


## Issues


## Team




## License

Created during our time as <b>Code Chrysalis</b> students.

Unlicensed

-Team Wave
