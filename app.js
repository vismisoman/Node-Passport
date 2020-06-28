const express= require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport =require('passport');

// DB Config
const db = require('./config/keys').mongoURI;

// Passport config
require('./config/passport')(passport);

//Connect to Mongo
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log('Connected to DB'))
.catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

//Routes
// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
    session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to flash
app.use(flash());

//Global Vars
app.use((req, res, next) =>{
    res.locals.success_msg= req.flash('success_msg');
    res.locals.error_msg= req.flash('error_msg');
    res.locals.error= req.flash('error');
    next();   
});

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));


app.listen(PORT, console.log(`Server started on port ${PORT}`));
