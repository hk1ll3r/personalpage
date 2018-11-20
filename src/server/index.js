const express = require('express');
const os = require('os');
const path = require('path');

const app = express();

//var router = express.Router();

//var puppiesC = require('./puppies');
//var bioC = require('./bio');

//router.get('/puppies', puppiesC.getAllPuppies);
//router.get('/bio', bioC.showBio);
/*router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);
*/

//module.exports = router;

//app.use('/api', router);
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/', express.static('dist'));
//app.get('/bio', bioC.showBio);
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(8080, () => console.log('Listening on port 8080!'));
