var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

//set up destination schema
var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date
    }
}, {
    timestamps: true
});

//set up flight schema
var flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            console.log('defaulting date')
            var oneYLater = new Date();
            oneYLater.setFullYear(oneYLater.getFullYear() + 1);
            console.log(oneYLater.toLocaleDateString());
            return oneYLater.toLocaleDateString();
        }
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA'],
        default: 'SEA'
    },
    destinations: [destinationSchema]
}, {
    timestamps: true
});

//export the Schema
module.exports = mongoose.model('Flight', flightSchema);
