// const ConvertLib = artifacts.require("ConvertLib");
const Contract = artifacts.require("Contract");

module.exports = function(deployer) {
  deployer.deploy(Contract);
  
};
