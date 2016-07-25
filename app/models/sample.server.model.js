var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

var SampleSchema = new Schema({
	text: {
		type: String,
		default: 'Hello World'
	}
});

mongoose.model('Sample', SampleSchema);