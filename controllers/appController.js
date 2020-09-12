// Index Page (Home)
exports.index = (req, res) => {
    res.render('index', { title: 'Tractor Club Home Page' });
}

// About Page
exports.about = (req, res) => {
    res.send('NOT IMPLEMENTED: About Page');
};

// Club News
exports.clubNews = (req, res) => {
    res.send('NOT IMPLEMENTED: Club News');
}

// Contact
exports.contact = (req, res) => {
    res.send('NOT IMPLEMENTED: Contact');
}


