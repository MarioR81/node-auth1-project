const bcrypt = require('bcryptjs');

module.exports = (req, res, next) => {
    // check that we remember the client
    // make sure they are already logged in
    console.log('session', req.session);
    if(req.session && req.session.user){
        next();
    } else {
        res.status(401).json({ message: "Hey!  you!  piss off!" })
    };
};