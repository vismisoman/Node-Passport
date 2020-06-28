In this video we will build a complete authentication app with login, 
register and access control using Node.js, Express, Passport, Mongoose and more.

To refer later:
---------------
- DEVMOUNTAIN (00:00:06)
- Introduction (00:00:22)
- Mongo DB, Create project database  (00:03:02)
- Open VS Code  (00:05:16)
- npm dependancies  (00:05:53)
- Coding: Init, setup views  (00:08:02)
- Coding: Configure DB into app  (00:21:27)
- Coding: Models, registration logic  (00:24:37)
- Coding: Passport Auth, Login logic  (01:00:28)

Youtube Link : https://www.youtube.com/watch?v=6FOq4cUdH8k
--------------
Future Implementations:
-----------------------
1. login, registration with MERN
2. Now redirect the user to the login page after successfully registering.
   The user should be logged in automatically and redirected to the dashboard after the registration.
3. Use express-validator 
4. Facebook, Google, and Email authentication, and how does the data fetched from 
   these three types of authentications play with one another
5. Only an administrator can register user accounts. 
   The register form should be on the dashboard from the administrator. 
   Every user should have it's own dashboard or work space.
6. Implement a confirmation email finalizing the registration process.
7. Passport using oauth2 instead of local.
8. Add the google login authentication with the same project
9. Lets say we need passport authentication for two login system - 
   one for admin login and other for user login, so how do we do it?
   Solu 1: Create only one login page and check if an admin flag is set in the mongodb 
   and redirect to admin dashboard
10.If the views are handled by React or any other front end framework, 
   In that case how to connect passport for that.
11.creating a login system for socket io
12.Do same project with Google Auth strategy
13.After log out from the dashboard page the login pages come, if we use the back button of the browser then it 
  "Again Redirecting to dashboard page",  which should not be allowed
14. Now I'm facing a problem. Is there any way to avoid user login any number of times?
    In this Authentication system, even after logging in, 
    I can again login as many times as I want. How should I bypass that?
15. Implement reset password
16. Implement any other frontend javascript into this authentication app
17. Add profile picture
18. How to use html instead of ejs? Ans:just name all files .html 
    and use res.sendFile('absolute path to file') instead of res.render()
19. how if i want to have 2 type of user such admin and normal user. how does it work...
    do i need to manually create an admin account or can it be created during the register?

20. For those of you who are wondering why can we still visit login and 
    register page after logging in copy and paste this at config/auth.js after ensureAuthenticated: 
  ensureNotAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      req.flash('error_msg', 'Bad request');
      res.redirect('/dashboard');
      return;
    }

    next();
  }... '
  then import and add this middleware to your login and 
  register router like this router.get('/login', ensureNotAuthenticated, (req,res) => {........});






















