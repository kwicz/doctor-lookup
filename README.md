# _Doctor Lookup_

#### _{Brief description of application}, Feb 2020_

#### By _**K. Wicz**_


## Preview

[![Landing Page Preview](url-for-img)]

**[View Live Preview](https://kwicz.github.io/doctor-lookup/)**

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Project Specification

| Behavior | Input | Output |
|:---|:---:|:---:|
|User searches program by medical issue and program returns list of doctors who treat that issues|Anxiety|Doctors who treat anxiety|
|User searches program by name and program returns list of doctors with that name|Jones|Doctors named Jones|
|User seraches for invalid data and program returns error|I love lamp|"Sorry, but we don't have any listings that match your search criteria"|
|User searches for valid data|Ear Infection|Doctor output will include first name, last name, address, phone number, website, and if doctor is accepting new patients|

## Setup/Installation Requirements

In Terminal:

1. Navigate to where you want this application to be saved, i.e.:
```cd desktop```
2. Clone the file from GitHub with HTTPS
```git clone https://github.com/kwicz/doctor-lookup.git```
3. Navigate to the new directory and install requirements.
```sh
cd 2_14_20
npm install
```
3. Open file in your preferred text editor
4. On Mac: ```open -a {your text editor} doctor-lookup```
5. On Windows: ```doctor-lookup```

To Download Manually:

* Navigate to https://github.com/kwicz/doctor-lookup.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "doctor-lookup-master".
* Right click "index.html" and select your preferred browser or text editor.

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/doctor-lookup/issues) here on GitHub._

## Technologies Used

* Javascript
* jQuery
* npm
* Webpack
* ESLint
* Babel
* Jest
* HTML & CSS
* Bootstrap 4
* Google Fonts

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_K.Wicz_**

## Setup/Installation Requirements


1. Find the green 'Clone or Download' button and copy the link
2. Open terminal and type...

**Windows**
```sh 
cd desktop
```

 Mac & linux 
 ```sh
 cd ~/Desktop
 ```

 3. In terminal, clone the project by typing:

```sh
git clone https://github.com/dustatron/recipe-wizard.git
```

4. Navigate to the new folder that was created on your desk:
```sh
cd recipe-wizard
```

5. In terminal, type:
```sh
npm install
```


8. Create a new Recipe Search API key and ID at [Edamam](https://developer.edamam.com/edamam-recipe-api).

9. In the root directory of your cloned folder, type 
```sh
touch .env
```

10. In your text editor, open the .env file and add
```sh
API_KEY = {your key here}
API_ID = {your ID here}
```
11. In the command line, start program with
```sh
npm run now
```
12. In the command line, start the server by running
```sh
firebase serve
```
13. Navigate to http://localhost:5000/ in your browser to see the project.

