const verifyToken = (req, res, next) =>{
    console.log('Do some auth stuff here...');
    req.user = {username : 'franchisor_test', role: 'franchisor'};
    next();
}

module.exports = verifyToken;