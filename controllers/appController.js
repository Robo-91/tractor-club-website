const User = require('../models/user');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const router = require('../routes');

// Index Page (Home)
exports.index = (req, res) => {
    res.render('index', { title: 'East Texas Antique Tractor & Engine Club, Inc.' });
}

// About Page
exports.about = (req, res) => {
    res.render('about', { title: 'About Page' });
};

// Club News
exports.clubNews = (req, res) => {
    res.render('clubnews', { title: 'Club News' });
}

// Contact
exports.contact = (req, res) => {
    res.render('contact', { title: 'Contact' });
}

// Join Club Form
exports.joinClub = (req, res) => {
    res.render('join_club', { title: 'Join Our Club' });
}

// Admin Login
exports.adminLogin = (req, res) => {
    res.render('admin_login', { title: 'Administrator Login' });
}

// Admin Sign-up GET
exports.adminSignUp = (req, res) => {
    res.render('admin_signup', { title: 'Administrator Sign Up' });
}

// Admin Sign-up POST
exports.adminSignUp_post = (req, res, next) => {
    const { username, password } = req.body;
    let errors = [];

    if (!username || !password) {
        errors.push({ message: 'Please fill in all fields' });
    }

    if (errors.length > 0) {
        res.render('admin_signup', {
            title: 'Administrator Sign Up',
            username: username,
            password: password
        })
    } else {
        User.findOne({ username: username })
        .then(user => {
            if (user) {
                // User exists
                errors.push({ message: 'Username is already registered' });
                res.render('admin_signup', {
                    errors,
                    username,
                    password
                })
            } else {
                const newUser = new User({
                    username: req.body.username,
                    password: req.body.password
                });
                // Hash password
                bcrypt.genSalt(10, (err, salt) => bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) { console.log(err); }
                    // Set password to hashed
                    newUser.password = hash;
                    newUser.save()
                        .then(user => {
                            res.redirect('/');
                        })
                        .catch(err => console.log(err));
                }));
            }
        });
    }
}

// Login POST Handler
exports.adminLoginPost = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next);
}

// Logout Handler
exports.adminLogout = (req, res) => {
    req.logOut();
    res.redirect('/');
}