var Ticket = require('../models/ticket');

module.exports = {
    newTicket
};

function newTicket(req, res) {
    Ticket.find({}, function(err, tickets) {
        res.render('tickets/new', {
            title: 'Add Tickets',
            tickets
        });
    });
};