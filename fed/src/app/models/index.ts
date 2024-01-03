import { Sequelize, DataTypes, Model } from 'sequelize';

const sequelize = new Sequelize('sql', 'postgres', '#Sathvik21', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => {
    console.log(`Database connected!!!`);
  })
  .catch((error: Error) => {
    console.log(`Error connecting to Db`);
    console.log(`Error is ${error}`);
  });

const db: { Sequelize: typeof Sequelize; sequelize: Sequelize; users?: Model<any, any> } = {} as any;

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Assuming the 'userModel' file exports a function that defines the User model
const userModel = require('./userModel');
db.users = userModel(sequelize, DataTypes);

// Ensure 'db.users' is defined before calling sync
if (db.users) {
  db.users.sync({ alter: true });
}

export default db;
