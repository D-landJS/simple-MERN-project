import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './database.js';

import studentRoutes from './routes/student.js';

const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
const port = app.get('port');

// Middlewares
app.use(morgan('dev'));

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(cors());

// Routes
app.use('/students', studentRoutes);

// Port
app.listen(port, () => {
	console.log('Server on port', port);
});
