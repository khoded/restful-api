const mongoose = require('mongoose');
const schema = mongoose.Schema;

//create geolocation schmea
const GeoSchema = new schema({
	type: {
		type: String,
		default: "Point"
	},
	coord:{
		//expecting an array
		type: [Number],
		index: "2dsphere"
	}
})

//create ninja schema
const NinjaSchema = new schema({
	name :{
		type : String,
		required: [true,"Name field is required"]
	},
	rank: {
		type: String
	},
	available:{
		type: Boolean,
		default: false
	},
	//add a geo location
	geometry: GeoSchema
});

const Ninja  = mongoose.model('ninja',NinjaSchema);

module.exports = Ninja;