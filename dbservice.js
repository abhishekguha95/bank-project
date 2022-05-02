const Account = require('./models/account')
const database = require('./database')


exports.createAccount = async(applicantData) => {
    const account = await Account.create({
        first_name: applicantData.firstName,
        last_name: applicantData.lastName,
        balance: applicantData.balance || 0,
    });
    return account;
}