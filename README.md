# Dashboard Server

This is the back-end code for the server part of the the Dashboard.
<br>
The Live version of this server is hosted on AWS Lambda. And for security purposes I can't share a live link to it. Thanks for understanding.
<br>
Instead, Check out the live version of the dasboard :- https://property-dashboard-s6fr.onrender.com/
<br>
You can login with google. Don't worry it doesn't collect any data except for your name, email and avatar of your google profile.

## Technologies used

- Express.js
- Mongoose
- Cloudinary (For hosting the images)
- MongoDB (For hosting all the data)

## Overview

This is a pretty simple backend application that's built with the CRUD functionality of Refine in mind. The endpoints are strucuted as Refine can acess them easily without any problem. The database is managed by the back-end for obvious reasons.
<br>
All the secret values are handled by env variables. And you can find the references within the code.
<br>
The current verison of the code is optimized to be deployed on AWS lambda as a serverless fucntions. So it might seem that certain best practices weren't followed. But it was neccesery.
