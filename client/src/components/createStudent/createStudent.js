import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
			width: '25ch',
		},
	},
}));

const initialState = {
	registerationNumber: 0,
	name: '',
	grade: '',
	section: '',
};

const CreateStudent = _ => {
	const [student, setStudent] = useState(initialState);

	const handleChange = e => {
		const { name, value } = e.target;
		setStudent({ ...student, [name]: value });
	};

	const createStudent = async e => {
		e.preventDefault();
		const url = 'http://localhost:4000/students';
		await axios.post(url, student);
		window.location.reload(false);
	};

	const classes = useStyles();

	return (
		<>
			<h2>Create Student</h2>
			<form
				className={classes.root}
				noValidate
				autoComplete="off"
				onSubmit={createStudent}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<TextField
					id="outlined-basic"
					label="Registeration No."
					name="registerationNumber"
					variant="outlined"
					value={student.registerationNumber}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-basic"
					label="Name"
					variant="outlined"
					name="name"
					value={student.name}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-basic"
					label="Grade"
					variant="outlined"
					name="grade"
					value={student.grade}
					onChange={handleChange}
				/>
				<TextField
					id="outlined-basic"
					label="Section"
					variant="outlined"
					name="section"
					value={student.section}
					onChange={handleChange}
				/>
				<Button type="submit" variant="contained" color="primary">
					Create
				</Button>
			</form>
		</>
	);
};

export default CreateStudent;
