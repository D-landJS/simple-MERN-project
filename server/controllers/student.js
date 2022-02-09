import Student from '../models/student.js';

export const getStudents = async (req, res) => {
	try {
		const allStudents = await Student.find();
		res.status(200).json(allStudents);
	} catch (e) {
		res.status(404).json({
			message: e.message,
		});
	}
};

export const createStudent = async (req, res) => {
	try {
		const student = req.body;
		const newStudent = new Student(student);
		await newStudent.save();
		res.status(201).json({
			status: 'Successfully!',
			message: 'Student created',
		});
	} catch (e) {
		res.status(404).json({
			status: 'Unsuccessfully!',
			message: e.message,
		});
	}
};

export const deleteStudent = async (req, res) => {
	try {
		const { id } = req.params;
		await Student.findByIdAndRemove(id);
		res.status(200).json({
			status: 'Successfully!',
			message: 'Student deleted',
		});
	} catch (e) {
		res.status(404).json({
			status: 'Unsuccessfully!',
			message: e.message,
		});
	}
};
