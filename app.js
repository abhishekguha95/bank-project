const express = require('express');
const routes = require('./routes');

const app = express(); // express instance created
app.use(express.json());

const sequelize = require('./database');

const dbAuthAndSync = async () => {
    console.log('inside dbAuthAndSync');
    try {
        await sequelize.authenticate();
        console.log('Database connection has been established successfully.');
        sequelize
            .sync()
            .then((res) => {
                //console.log('db sync success ', res);
            })
            .catch((err) => {
                //console.log('db sync fail ', err);
            });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

dbAuthAndSync();

app.use('/', routes); //passing all routes on this server to the routes file

app.listen(3000, () => {
    // app listening on all requests made on this port : http://localhost:3000
    console.log('app is listening on 3000');
});
