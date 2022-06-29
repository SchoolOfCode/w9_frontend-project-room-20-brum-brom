
# School Of Code Dashboard Documentation

A note taking app for bootcampers at The School Of Code

## Authors
- Fiona Kitchen
- Arian Moossavi
- Maurizio Monti
- Jim Wynn




## Overview

- School of Code Dashboard is an app which allows users to take and store notes and targets. In addition, users are given a daily inspirational quote and video suggestion. It is a dashboard app with separate widgets.
- The app was created so that bootcampers have a centralised location in which to store notes, set targets and be given inspirational quotes and suggestions for activities away from coding.
- The app was created using html, css, javascript, React 18.2, Express, Node, Postgres, cors, Nodemon, dotenv, Jest, Cypress and SuperTest.
- The app is currently separated into two projects: a React app on the frontend and an API which is pulled from the backend.

## Features/Functionality


- **Notes**: When the page loads, data is displayed for Monday of week 1. Entries can be made for 6 days a week, covering the 16 week duration of the course.  If the user chooses a different day or week, the data displayed will be updated.
- On render, or when a day and week combination is selected from the drop down, a get request is sent to the database to display notes that match a query of week and day.

- Users can input their notes, select an emotion and input their reflections for each day.  This is done by using a patch request that takes in week and day fields from the dropdown field and fires a fetch on the submit button.  The data is stored once the update button is clicked. 

- **Targets**: On the initial load, there is a blank target list. The user is able to add a target to the list, strikethrough/complete, edit and delete any of the targets created. At present, the list items will only remain for the duration of the browsing session. 

- The targets list utilises the web storage API which enables the data to persist on refresh and be stored in key value pairs in local browser memory. However, it will be reset when the browser/tab is closed. See link below to understand the implementation: https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API.

- **Future implementations**: This feature will be connected to a database and operate through a RESTful API to enable data to persist.  The backend for this has been implemented in part, but has not yet been tested.

- **Breathe**: The breathe section consists of a few, handpicked short videos for your breaks. It suggests short stretching routines and meditations, and gives you meaningful time away from the screen. Videos are sourced from Youtube, and are drawn from an array of select clips.  *Note: please submit any relevant videos which you would like to contribute for review.*

- **Future implementation (features in progress)**: In future, you will be able to view, add, edit and delete code snippets in a separate widget.  You will also be able to see the School of Code Twitter Feed in another widget.    



## Quick Start Guide
1. Create a folder and clone down both repositories from GitHub:

        git clone https://github.com/SchoolOfCode/w9_frontend-project-room-20-brum-brom

        git clone https://github.com/SchoolOfCode/w9_backend-project-room-20-brum-brom

*Note: To get the app working you should start two different terminals at this stage and open one folder in each. This is because we are running two separate servers, the frontend on port 3000 and the backend on port 3001.
If you’re working in VScode, this can be done by using the split terminal function at the top right of your terminal.* 

2. After doing this we want to npm i in both terminals so we download the dependencies for both the frontend (cd into soc-dasboard first) and backend (w9_backend-project-room-20-brum-brom) 

   Start development servers:

**Frontend**:

     npm start  

in w9_frontend-project-room-20-brum-brom/soc-dashboard

**Backend**: 

     npm start 

in w9_backend-project-room-20-brum-brom
 
For now, this is all that needs to be done on the frontend. However, it will throw errors as the database isn’t set up yet.

3. Setting up the backend:

- To start up the backend, first you want to make a .env file (in w9_backend-project-room-20-brum-brom) to hold your sensitive information. This is where your credentials that connect to your database live. We created a database in heroku, but feel free to explore other sites as long as they have a connection URL you can use. 

 - Add your URL link to your database in your .env file - write PGURL and then put your connection string next to it as is
 
- Our next step is to run our scripts. This can be done by writing the command  **npm run reset**  in the terminal. This fires the actions to drop the table (if it exists), then create it and populate it.

- Now you’ve linked the database to the app through pg, and created and populated the table, you should be ready to go!


## Common Problems

- Remember to **npm i**, it happens to the best of us!

- When starting your app, make sure your link to the database exists and is ***up to date*** - sites like Heroku will often change their credentials and may not be so quick on updating you!

- When starting the frontend first navigate into **soc-dashboard** before running **npm start**.

- If you haven’t started your backend you will be met with a ***fetchNotes()*** error, but you can exit out of this to see the webpage.  

- In this project we are using ECMAscript modules, so keep this in mind if you want to do some tinkering.

- You may get an **import React from react** error - we’ve fiddled around with this and found our best course of action is importing React in each component. While React says that this is no longer necessary, we found it was for us!

- We recommend opening the app using chrome as we’ve come across issues with local storage in Firefox.  We have not tested this app thoroughly in FireFox, Safari, Internet Explorer, Opera or Edge.



## Known Issues

- Our editing feature within our target section is a little unpredictable. Here are some problems you may encounter:

    - **(RESOLVED in version 1.1)** When you click edit on the targets list it doesn’t retain the current text you’re editing. 

    - When you edit multiple items at the same time, and only input text in one field it will reflect that text in both fields. 

- We’re working on making our web page fully responsive, but currently it’s best viewed on a 4k display. Desktops generally should deliver a good experience when using the app. However if the window is too narrow, the page may not display correctly.   


## Acknowledgements

- To Chris Meah, Liz K and all the School of Code coaches for their continuing support
- To Arshi for getting us out of the deepest of holes

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| SoC Blue | ![#32a3db](https://via.placeholder.com/10/32a3db?text=+) #32a3db |
| SoC Grey | ![#efefef](https://via.placeholder.com/10/efefef?text=+) #efefef |
| SoC White | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) #ffffff |
| SoC Grey | ![#5c5c5c](https://via.placeholder.com/10/5c5c5c?text=+) #5c5c5c |

