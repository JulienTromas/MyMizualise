<p align="center"><a href="https://ibb.co/6YhHJs4"><img src="https://i.ibb.co/G7wW3PV/Screen-Shot-2020-10-31-at-7-30-45-PM.png" alt="Screen-Shot-2020-10-31-at-7-30-45-PM" border="0"></a></p>

><b>SpotS</b> is your go to driving companion giving you navigational access to the complete network of <b>Flying K</b> travel centers

# Table of Contents
  * [Introduction](#Introduction)
  * [Usage](#Usage)
  * [Developers Corner](#Developers_Corner)
  * [Issues](#Issues)
  * [The Team](#The_Team)
  * [License](#License)

## Introduction

Introduction

#### Compatibility

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="iOS Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>iOS Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/samsung-internet/samsung-internet_48x48.png" alt="Samsung" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Samsung | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br/>Opera |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions


## Usage

Upon opening the app, use the drop down menu to select which state and city you are searching for a FlyingK stop.  After clicking the search button, the map will mark all existing FlyingK stops in the specified location. Click on the marker to receive the name and address of the stop, which can then be copied and pasted into any preferred navigation app of choice.  Click on the reset button to reset the map and begin a new search.


## Developers Corner

<b>SpotS</b> is a navigational app that is built on an express server configured to use Knex to update and retrieve from a postgresQL and send data to a front end built around native REACT. The app is currently deployed through Heroku


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
At this point the application will run on <a href= "http://localhost:9000/">Localhost:9000 </a>
<br>

#### Creating and running Migrations
to make a migration, once dependancies have been installed, run the following in your node terminal:

```bash
yarn migrate:make <migration_description>
```

This wil generate a Knex migration file. The migration will run upon the next start up of the app.


## Issues

<b>Update 10.31.2020.v11</b>
<br>
 When running in a local environment, windows users may find that the server is not connecting with their local Postgresql database. The development team is aware of this problem. 

## The Team

<a href= "https://github.com/kenny01123" >Kenny Ng <b>Tech Lead</b></a>
<br>
<br>
<a href= "https://github.com/alexdang1993374">Alex Dang <b> React Front End</b></a>
<br>
<br>
<a href= "https://github.com/Yoshi106">Yoshiaki Aibara <b>Postgres Backend & Heroku</b></a>
<br>
<br>
<a href="https://github.com/Jaymontojo673">Jay Montojo <b>Postgres Backend & Heroku</b></a>


## License

Created during our time as <b>Code Chrysalis</b> students.

Unlicensed

-Team Yoshi's Island
