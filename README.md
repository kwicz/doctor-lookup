# _Galactic Age Calculator_

#### Description 
_Calculate a user's age and life expectancy on each planet.
 Feb 2020._

#### By _**K. Wicz**_

## Preview

![Landing Page Preview](landing-page.png)

**[View Live Preview](https://admiring-hodgkin-6c8b1d.netlify.com/)**

## Description

Inspired by the Sci-Fi Trilogy _Remembrance of Earth's Past_ by Cixin Liu, this site allows users to plan for inter-solar system travel with the fictitious space travel organization, The Halo Group.  This Halo Group website will allow their customers to enter their age and how many years they plan to be cryogenically frozen to see how many years old they would be and the difference in their age and their estimated life expectancy on different planets that are part of a travel package.

## Project Specifications

|Behavior|Input|Output|
|---|:---:|:---:|
|User inputs age|--|error|
||"twenty"|error|
|User inputs age under 80|20|60 (years until estimated life expectancy)
|User inputs age over 80|90|10 (years past estimated life expectancy)|
|User inputs preferred cryogenically frozen years|20|est. life expectancy + 20|
|User over 80 inputs preferred cryogenically frozen years|20|error|
|User selects planet|Mercury|Earth age / .24|
||20|Estimated total years left / .24|
||90|Estimated years over / .24|
|User selects planet|Venus|Earth age / .62|
||20|Estimated total years left / .62|
||90|Estimated years over / .62|
|User selects planet|Mars|Earth age / 1.88|
||20|Estimated total years left / 1.88|
||90|Estimated years over / 1.88|
|User selects planet|Jupiter|Earth age / 11.86|
||20|Estimated total years left / 11.86|
||90|Estimated years over / 11.86|

## Setup/Installation Requirements

_In Terminal:_

* Navigate to where you want this application to be saved, i.e.:
```cd desktop```
* Clone the file from GitHub with HTTPS
```git clone https://github.com/kwicz/galactic-age-calculator.git```
* Open file in your preferred text editor
* On Mac: ```open -a {your text editor} galactic-age-calculator```
* On Windows: ```galactic-age-calculator```

_Download Manually:_

* Navigate to https://github.com/kwicz/galactic-age-calculator.
* Click green "Clone or Download" button.
* Click "Download ZIP".
* Click downloaded file to unzip.
* Open folder called "galactic-age-calculator".
* Right click "index.html" and select your preferred browser or text editor.

## Future Additions

* Add planet images.
* Add planet informational details.
* Add functionality for Saturn and Uranus.

## Known Bugs

_No known bugs at this time._

## Support and contact details

_Have a bug or an issue with this application? [Open a new issue](https://github.com/kwicz/galactic-age-calculator/issues) here on GitHub._

## Technologies Used

* Node.js
* Webpack
* Javascript
* jQuery
* Jest
* HTML & CSS
* Bootstrap 4
* [Bootsnipp](https://bootsnipp.com/snippets/351Vo)
* [Start Bootstrap](https://startbootstrap.com/snippets/pricing-table/)

### License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 **_K. Wicz_**