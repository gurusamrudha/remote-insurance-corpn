# Remote Insurance Corpn

## Issue

1. Paper work due to no internet access
2. Carry Brochures and form papers

## Solution

When sales reps visit customers I would suggest to save data offline on an .xml file with provided pattern, Once they have access to internet, they could upload the respective form and see the Quotaion form filled automatically with working validations which would make them to recheck before submitting. 

Future work. Can make reps to upload a single file which has "n" number of customers data.


### Install Node & NPM

This project requires latest node and npm 
node -v ==> 12.13.0
npm -v  ==> 6.12.0
ng -v   ==> 11.0.7

### Install Packages

Now you can install this project's packages by running `yarn` or `npm install`.

### Run the Development Server

Run `npm start` for a dev server. Navigate to `https://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Project Structure

Project
  ├── src/app                  - Angular app
  │    ├── Home Page           - Main landing page of the application
  │    ├── Generate Image      - Component which creates images
  │    ├── Services Folder     - Contains all the services of the project
  │    ├── Insurance Policies  - Products that Remote Insurance company deal with
  │    ├── contact             - Contact page opens the default email app on your computer with `To` field auto filled
  │    ├── Models              - Contains all the Models of the project
  │    ├── styles.css          - Global stylesheets
  │    ├── Quotaion Form       - Reactive Quotation form available to upload and edit xml sheets
  |    |
  │    ├── licenses            - MIT license


## Points taken care while doing this project
1. Used 3rd party `ngx-owl-carousel-o` version `5.0.0` this is an MIT license
2. Used bootstrap `4.6.0` for design patterns mainly for toolbar and Quotation form
3. Used Flexbox along side for styling
4. Used `http://jsonplaceholder.typicode.com/` for fetching images. I avoided placing a real image "Quality of the images  didnt satisfy me!"
5. File structuring is taken care
6. Localization is taken care
7. Form Validation taken care with respective error messages
8. Uploading a .xml file is provided on the email.
9. Made sure Subscribing for an observable prevents memory leak.
10. Use of reusable component `Generate Image Component` can be used throughout the project.
11. Though have not return any new test cases but all the existing or auto generated ones run perfect. `had setup the TestBed`. Use `npm run test` to test
12. Lint errors are taken care use `ng lint` to test.
13. This Project is Mobile responsive as well. Bootstrap takes care of that

## I welcome Queries, questions and any suggestions :)
Please do Contact gurusamrudh@gmail.com

