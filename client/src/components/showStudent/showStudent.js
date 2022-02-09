import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
});

const ShowStudent = _ => {
	const classes = useStyles();

	const [students, setStudents] = useState([]);

	const getStudent = async _ => {
		const url = 'http://localhost:4000/students';
		const res = await axios.get(url);
		setStudents(res.data);
	};

	useEffect(() => {
		getStudent();
	}, []);

	const deleteStudent = async id => {
		const url = 'http://localhost:4000/students';
		await axios.delete(`${url}/${id}`);
		window.location.reload(false);
	};

	return (
		<>
			<h2>All Students</h2>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Registeration Number</TableCell>
							<TableCell align="right">Name</TableCell>
							<TableCell align="right">Grade</TableCell>
							<TableCell align="right">Section</TableCell>
							<TableCell align="right">Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{students.map(row => (
							<TableRow key={row._id}>
								<TableCell component="th" scope="row">
									{row.registerationNumber}
								</TableCell>
								<TableCell align="right">{row.name}</TableCell>
								<TableCell align="right">{row.grade}</TableCell>
								<TableCell align="right">{row.section}</TableCell>
								<TableCell align="right">
									<IconButton
										className={classes.margin}
										onClick={() => deleteStudent(row._id)}
									>
										<DeleteIcon fontSize="small" />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export default ShowStudent;
