Frontend Developer Candidate Assignment
==

## How to submit

 1.	Add your work to a private git repository on bitbucket.org
 2.	Grant read access to user 'xxx' to your repository
 3.	We will review your work and contact you in maximum 1 week

## Assignment

Build a simple web app where the user can select his vehicle using the data provided in the api server. This includes:

1. Think in the easiest way for the user select his vehicle.
2. In the end, the selected vehicle should be submited to our API.
3. As a use case, consider that the user wants to get a "FORD - Fiesta - Limousine, Benzin, 1119 cc, 40/54 KW/PS".

### Considerations
- Please focus on timeliness and completeness - if you have to choose between delivering 100% of the first feature + 0% of the second, and 50%-50%, please choose the first option
- The provided API server will not always return a successfull result, be aware of this! Do not modify the provided server.
- The provided API has only a fraction of the vehicles that we would have in production.
- Make it easy to build and run
- No need to cover everything but having some unit test would be appreciated.
- Think this app as a real project where you need to consider maintenability.
- Only use 3rd party components if there is good reasoning for it. Please justify any components used.

### Requirements
- Make it mobile first and Desktop friendly UI.
- Don't use any UI library as bootstrap or such.
- The app should work in all major browser (latest version)

## API Server

You can run the provided api server by running:

``` javascript
node apiserver/server.js

'http://localhost:8080/api/makes'
/*
  Will return an array of makes.

  Example of response:
  [{
    "make": string
  }]
*/

'http://localhost:8080/api/models'
/*
  Will return an array of models.

  Example of response:
  [{
    "make": string,
    "model": string
  }]
*/

'http://localhost:8080/api/vehicles'
/*
  Will return an array of models.

  Example of response:
  [{
    "make": string,
    "model": string,
    "hSN": string,
    "tSN": string,
    "enginePowerPS": number,
    "enginePowerKW": number,
    "fuelType": string,
    "bodyType": string,
    "engineCapacity": number,
    "gDVLabel": string,
    "displayName": string
  }]
*/
```