const Account = require('./models/account');
const database = require('./database');

exports.createAccount = async (applicantData) => {
    try {
        return await Account.create({
            first_name: applicantData.firstName,
            last_name: applicantData.lastName,
            balance: applicantData.balance || 0,
        });
    } catch (error) {
        return error;
    }
};

exports.findAccount = async (requestData) => {
    try {
        const accountDetails = await Account.findOne({
            where: {
                account_number: requestData.accountNumber,
            },
        });
        return accountDetails && accountDetails.dataValues;
    } catch (error) {
        return error;
    }
};

exports.removeAccount = async (requestData) => {
    try {
        const removedAcc = await Account.destroy({
            where: {
                account_number: requestData.accountNumber,
            },
        });
        if (removedAcc === 1) {
            return 'Account removed';
        }
    } catch (error) {
        return error;
    }
};
