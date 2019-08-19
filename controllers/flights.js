var Flight = require('../models/flight');

module.exports = {
    indexView,
    newView,
    create,
    showView
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
        for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    var flight = new Flight(req.body);
    flight.save(function(err) {
      if (err) return res.redirect('/flights/new');
      res.redirect('/flights');
    });
  }; 

  //function for showing details page
  function showView(req, res) {
    Flight.findById(req.params.id, function (err, flight) {
      res.render('flights/show', {
        title: 'Flight Details',
        flight
      })
    })
  }
