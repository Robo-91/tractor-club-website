// Index Page (Home)
exports.index = (req, res) => {
    res.render('index', { title: 'Tractor Club Home Page' });
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

// Admin Sign-up
exports.adminSignUp = (req, res, next) => {
    res.render('admin_signup', { title: 'Administrator Sign Up' });
}
