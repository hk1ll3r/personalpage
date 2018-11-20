exports = module.exports = {
  showBio: showBio,
};

function showBio(req, res) {
  res.render('bio', { title: 'Hey', message: 'Hello there!' });
}

