import mongoose from 'mongoose';
const studentSchema = mongoose.Schema({
	registerationNumber: Number,
	name: String,
	grade: String,
	section: {
		type: String,
		default: 'A',
	},
});

const student = mongoose.model('Student', studentSchema);

export default student;
