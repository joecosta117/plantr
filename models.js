const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');

const Gardeners = db.define('gardener', {
	name: {
		type: Sequelize.STRING
	},

	age: {
		type: Sequelize.INTEGER
	}
}) 

const Plots = db.define('plot', {
	size: {
		type: Sequelize.INTEGER
	},

	shaded: {
		type: Sequelize.BOOLEAN
	}
})

const Vegetables = db.define('vegetable', {
	name: {
		type: Sequelize.STRING
	},

	color: {
		type: Sequelize.STRING
	},

	planted_on: {
		type: Sequelize.DATE
	}
})


Plots.belongsTo(Gardeners);

Vegetables.belongsToMany(Plots, {through: 'vegetable_plot'});

Gardeners.belongsTo(Vegetables, {as: 'favorite_vegetable'});





module.exports = {db, Gardeners, Plots, Vegetables}

