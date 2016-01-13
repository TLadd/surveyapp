# surveyapp

## Installation

Clone the repository

```
git clone git@github.com:TLadd/surveyapp.git
```

Install node v5.4.0, which comes with npm 3.3.12. You can use `nvm use` if nvm is installed

Run `npm install`

Create a test and development database in mysql. To match the default config/config.json, log into mysql as root and run

```
CREATE DATABASE survey_test;
CREATE DATABASE survey_development;
```

Change the config/config.json to match your password for mysql.

##Running Tests
Run `npm run test`. This will run both the React jest tests, which test the UI, and mocha tests, which test the backend endpoints. All tests should pass. There is one deprecation warning with one of the jest tests that is a result of the react-chartjs dependency.

##Building Frontend
Run `npm run build`. This generates two javascript files, bundle.js and bundle-admin.js in public/build. These two files are included in version control, so this step can be skipped if you are only concerned with running the application.

##Running Application
Run `npm run start`. It will start up on localhost:3000 by default.

If you would like to seed the application with some initial questions, init.sql will insert 10 questions with accompanying choices. You should run `source /PATHTOPROJECT/init.sql` in mysql using your development database after starting the application, but before adding questions of your own.

##Application Pages
localhost:3000 is the main page which displays a random question to the guest. It will prevent sending the same question twice to the same guest

localhost:3000/admin is the main admin page

localhost:3000/admin#/questions displays a list of all questions

localhost:3000/admin#/questions/new displays a form to allow the entry of new questions

localhost:3000/admin#/questions/:id displays the questions, choices, and how many people have voted for each choice.

The admin pages have links you can use to navigate between them.

The admin pages are protected by basicAuth, so you will be prompted for a username and password when trying to visit them for the first time. The username is admin and the password is letmein

Multiple users can be simulated by using multiple browsers, using incognito mode, or clearing cookies.
