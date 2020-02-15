# _Doctor Lookup_

#### _An application to search for doctors in your area by name or specialty, Valentine's Day, 2020_

#### By _**K. Wicz**_

## Preview ##

![Landing Page Preview](./src/landing-page.png)

## Description

_This application allows a user to search for a doctor by entering either a name or an ailment. The program will return a list of doctors with in 100 miles of Portland and will also proved the doctor's address, their phone number, and whether or not they are accepting new patients._

## Project Specification

| Behavior | Input | Output |
|:---|:---:|:---:|
|User searches program by medical issue and program returns list of doctors who treat that issues|Anxiety|Doctors who treat anxiety|
|User searches program by name and program returns list of doctors with that name|Jones|Doctors named Jones|
|User seraches for invalid data and program returns error|I love lamp|"Sorry, there are no results that match your request. Please try again."|
|User searches for valid data|Ear Infection|Doctor output will include first name, last name, address, phone number, website, and if doctor is accepting new patients|

## Setup/Installation Requirements

In Terminal:

1. Navigate to where you want this application to be saved, i.e.:
```sh
cd desktop
```
2. Clone the file from GitHub with HTTPS
```sh
git clone https://github.com/kwicz/doctor-lookup.git
```
3. Navigate to the new directory and install requirements.
```sh
cd doctor-lookup

npm install
```
4. Create a new API Key at [BetterDoctor](https://developer.betterdoctor.com/)
5. In your directory, create a new file called .env. Add this file your your .gitignore file.
```sh
touch .env
```
6. In your text editor, open the .env file and add
```sh
API_KEY = {your key here}
```
7. In the command line, start your program by typing
```sh
npm run start
```

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/doctor-lookup/issues) here on GitHub._

## Technologies Used

* Better Doctor API
* Javascript
* jQuery
* npm
* Webpack
* ESLint
* Babel
* HTML & CSS
* Bootstrap 4
* Google Fonts

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_K.Wicz_**
