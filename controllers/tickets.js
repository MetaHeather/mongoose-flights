var Ticket = require('../models/ticket');

module.exports = {
    newTicket
};

function newTicket(req, res) {
    console.log("new ticket route");
    res.render('tickets/new',{ 
        title: 'Add Ticket',
        fId: req.params.id 
    });
};