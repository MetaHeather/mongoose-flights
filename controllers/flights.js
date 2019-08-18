var Flight = require('../models/flight');

module.exports = {
    indexView,
    newView,
    create
  };

  //functione that return views
  function indexView(req, res){
  Flight.find({}, function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights});
  })
  };
 
 //when GET new redirects to new.ejs 
function newView(req, res) {
  res.render('flights/new', {title: 'Add Flight'});
}


  function create(req, res){ 
    var flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      res.redirect('/flights');
    });
  }; 

  