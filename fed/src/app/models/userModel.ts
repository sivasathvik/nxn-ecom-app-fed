import { Sequelize, Model } from 'sequelize';

interface UserAttributes {
  userName: string;
  email: string;
  password: string;
  confirmpassword: string;
}

module.exports = (sequelize: Sequelize) => {
  const User = sequelize.define<Model<UserAttributes>>(
    'user',
    {
      userName: {
        type: 'STRING',
        allowNull: false,
      },
      email: {
        type: 'STRING',
        allowNull: false,
      },
      password: {
        type: 'STRING',
        allowNull: false,
      },
      confirmpassword: {
        type: 'STRING',
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  return User;
};
