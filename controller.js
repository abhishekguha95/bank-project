const dbService = require('./dbservice');

exports.createAccount = async(req, res) => {
    //console.log(req)
    let requestData = req.body;
    console.log('requestData: ', requestData)
    const returnVal = await dbService.createAccount(requestData);
    res.status(200).send(returnVal)
};

// exports.removeAccount = async((req, res) => {

// });

// exports.checkBalance = async((req, res) => {

// });

// exports.transferMoney = async((req, res) => {
 
// });