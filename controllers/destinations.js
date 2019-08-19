//bring in our flight model
var Flight = require('../models/flight');

module.exports = {
    create
};

//function to create new destination
function create(req, res) { 
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        });
    });    
};
