const dbService = require('./dbservice');

exports.createAccount = async (req, res) => {
    //console.log(req)
    let requestData = req.body;
    console.log('requestData: ', requestData);
    const returnVal = await dbService.createAccount(requestData);
    res.status(201).send(returnVal);
};

exports.removeAccount = async (req, res) => {
    let requestData = req.body;
    console.log('requestData: ', requestData);
    const accountDetails = await dbService.findAccount(requestData);
    console.log('accDetails: ', accountDetails);
    if (accountDetails) {
        const returnVal = await dbService.removeAccount(requestData);
        console.log('returnVal: ', returnVal);
        res.status(200).send({ message: returnVal });
    } else {
        res.status(404).send({ message: 'Account not found' });
    }
};

// exports.checkBalance = async((req, res) => {

// });

// exports.transferMoney = async((req, res) => {

// });
