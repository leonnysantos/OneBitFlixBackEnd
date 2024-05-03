import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'development_onebitflix',
    username: 'postgres',
    password: '16423110',
    define: {
        underscored: true
    }
})