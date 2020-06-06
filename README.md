Health Passport (Professor Side)
====================================

## DESCRIPTION

Health Passport is a system which can guarantee a safer class environment during COVID-19. This repo is
specifically for the professor side application. To see the other two platforms (Student side and Health 
Service side), you can go to

* https://github.com/cs394-s20/HealthTracker_Student_View
* https://github.com/cs394-s20/HealthServices_View

This web application allows professors to view information about their students.

* Professors can view a list of students for each of their classes.
* Professors can track whether or not students are able to attend class in-person.
* Professors can use this information to decide whether or not to do lecture remotely the day of class.


## SYSTEM REQUIREMENTS

- Node v12.16.1
- npm 6.14 + (6.14.4 recommended)
- Mac OS (Catalina 10.15.5 +)


## INSTALLATION

The best way to install the React App is to follow this link

[https://reactjs.org/docs/getting-started.html]

which includes installing all of the dependencies you might need.

After you set up the environment, now you have to install the packages for the App

Normally the following command would just work fine
```bash
# npm install .
```

## RUNNING

To run navigate to your repository via the
command line, and run the executable:

```bash
$ npm install
$ npm start
```

This will start up a app server running on localhost port 3000.

## CONFIG FILE

In order to create your own firebase database, you should 
- create a firebase account
- create a project
- create a real time database
- import the firebase_database_schema.json 
- copy the configurations from firebase into ./components/config.js
- create a img/ in firebase storage


## API DOCUMENTATION

The [Material UI](https://material-ui.com/) allows you to format 
your frontend.


## CONTRIBUTE

If you'd like to contribute to our project, start by forking the repo on GitHub:

https://github.com/cs394-s20/HealthTracker_Student_View

To get all of the dependencies, use npm install or view dependencies in the package.json. The best way to get
your changes merged back into core is as follows:

1. Clone down your fork
1. Create a thoughtfully named topic branch to contain your change
1. Hack away
1. If you are adding new functionality, document it in the README
1. Push the branch up to GitHub
1. Send a pull request to the HealthTracker_Student_View project.

## RELEASING

In order to release the project in public, you should enable deployment through your firebase account.

## FUTURE IMPROVEMENTS

- We would recommend counting the students who are ineligable to attend class. This would streamline the important information for the professor.
- Before production deployment, it would be ideal to incorporate the Canvas API and Caesar API of
your university.
