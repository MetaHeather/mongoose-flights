var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;

//set up flight schema
var flightSchema = new Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American','Southwest', 'United'],
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function(){
            var oneYLater = new Date();
            oneYLater.setFullYear(oneYLater.setFullYear() + 1);
            return oneYLater.toLocaleDateString();
        }
    }
},{
    timestamps: true
});

//export the Schema
module.exports = mongoose.model('Flight', flightSchema);
