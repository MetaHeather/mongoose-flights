var Ticket = require('../models/ticket');
var Flight = require('../models/flight');

module.exports = {
    newTicket,
    create 
};


//Rerouts to add ticket form 
function newTicket(req, res) {
    console.log("new ticket route");
    res.render('tickets/new',{ 
        title: 'Add Ticket',
        fId: req.params.id 
    });
};

//creates a new ticket
function create(req, res) {
    let ticket = new Ticket({
        seat: req.body.seat,
        price: req.body.price,
        flight: req.params.id
    });
    ticket.save(function (err) {
        if (err) return res.redirect(`flights/${req.params.id}/tickets/new`);
        res.redirect(`/flights/${req.params.id}`);
    });
};

