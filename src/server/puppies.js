var options = {
  // Initialization Options
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://postgres:@localhost:5432/puppies?user=postgres&password=&ssl=true';
//var connectionString = 'postgres://localhost:5432/puppies?user=postgres&password=&ssl=true';
var db = pgp(connectionString);

// add query functions



exports = module.exports = {
  getAllPuppies: getAllPuppies,
  //getSinglePuppy: getSinglePuppy,
  ///createPuppy: createPuppy,
  //updatePuppy: updatePuppy,
  //removePuppy: removePuppy
};

function getAllPuppies(req, res, next) {
  db.any('select * from pups')
    .then(function (data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'Retrieved ALL puppies'
        });
    })
    .catch(function (err) {
      return next(err);
    });
}

