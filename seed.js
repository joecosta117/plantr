const {
	db,
	Gardeners,
	Plots,
	Vegetables
} = require('./models');



	// .then(() => {
	// 	Vegetables.create({
	// 		name: 'carrot',
	// 		color: 'orange',
	// 		planted_on: '2018-09-24 08:23:04'
	// 	})
	// })
	// .then(() => {
	// 	return Gardeners.create({
	// 		name: 'Johnny',
	// 		age: 54
	// 	})
	// })
	// .then(() => {
	// 	return Plots.create({
	// 		size: 50,
	// 		shaded: true
	// 	})
	// })


Vegetables.create({name: 'carrot', color: 'orange', planted_on: '2018-09-24 08:23:04'})
	.then(() => {
		return Gardeners.create({name: 'Johnny', age: 54, favoriteVegetableId: Vegetables.id})
	})
	.then(() => {
		return Plots.create({size: 50, shaded: true, Plotsid: gardeners.id})
	})



db.sync({force: true})
	.then(() => {
		console.log('Database synced!');
	})
	.catch(err => {
		console.log('Disaster! Something went wrong!')
		console.log(err);
	})
	.finally(() => {
		db.close();
	})