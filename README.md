# Weather ForeCats

#### A planning repository for Capstone Project, Epicodus

### **by Marguerite Kennedy**

## Description


This app will give users the...purrfect meteorological experience: the weather in a given location paired with with cat photos that relate to the dominant weather trend in forecast, based on data returned by the API call. The photos will be stored in the Cloudinary photo CMS, which gives users options for API calls. 

Minimum Viable Product: Return 1) current temperature and weather conditions  at a given location 2) icons that correspond to the temperature and 3) a photo of a cat adjacent to or in similar weather conditions based on Open Weather App description ID (numeric) categories (e.g., rainy weather will return a photo of a cat in front of a window during rain).  

TECH NOTES: This app will be developed using React, the Open Weather App API, Cloudinary photo storage and API. The cat photos will be independently sourced, aiming for about 20+ photos in each category for the initial launch. Firebase will store the data. This will also use Webpack and NPM for package installation, as well as Babel.

Future Buildout: Using Cloudinary's upload tool and Redux and Axios state management tools, users will be able to upload and tag their own photos of cats in various weather conditions. Upon admin approval, these may be returned in future user searches. Other functionality may include the ability to click to see a "bonus" cat pic by category.

Other buildout could include a side-by-side city comparison or a toggled multi-day forecast.

## UI Component Hierarchy

An illustration of the UI component hierachy with state representation can be found here: https://github.com/Kennedy777/foreCats/blob/master/sourcetree.jpg

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| User enters a city and country | e.g., New York, NY | Will return the weather, weather icon, and a cat photo based on API weather description ID codes |
| If no city/country entered OR not found | return error | Request valid input

## Setup/Installation Requirements

* `Clone this repository
* `npm install`
* `npm run build`
* `Get an API key from Open Weather Map (openweathermap.org/)`

## Technologies Used
  * React
  * Open Sky Weather API
  * Cloudinary photo management system & API (cloudinary.com)
  * Node/NPM
  * Redux
  * Axios
  * Webpack
  * Babel
  * Bootstrap
  * Icons created by Eric Flowers (open source--thanks!)

## Support and contact details

_Let's geek out! Email me at reach.marguerite@gmail.com with any questions or suggestions._

### License

*This software is licensed under the MIT license*

Copyright (c) 2019 Marguerite Kennedy

