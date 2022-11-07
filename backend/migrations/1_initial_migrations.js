var Transactions = artifacts.require("Transactions");

module.exports = function (deployer) {
  // deployment steps
  deployer.deploy(Transactions);
};
