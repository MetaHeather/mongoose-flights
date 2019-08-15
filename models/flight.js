var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

//set up flight schema
var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American','Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            return;
        }
    }
},{
    timestamps: true
});

//export the Schema
module.exports = mongoose.model('Flight', flightSchema);
