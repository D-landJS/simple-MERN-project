import mongoose from 'mongoose';

const url =
	'mongodb+srv://Leon:Leon1506@cluster0.dg4wm.mongodb.net/studentDB?retryWrites=true&w=majority';

(async () => {
	try {
		await mongoose.connect(url);
		console.log('Db is connect');
	} catch (e) {
		console.log(e.message);
	}
})();
