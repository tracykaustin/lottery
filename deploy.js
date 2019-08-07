const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
  'age split seat stove alien click peanut require beauty car caution comfort',
'https://rinkeby.infura.io/v3/d504aa34759f4bebb909726cd6075fbf'
);
const web3 = new Web3(provider);
const GAS = 400000;
const GWEI = 1000000000;
const GAS_PRICE = 50*GWEI;

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from ', accounts[0]);
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: '0x' + bytecode })
    .send({gas: GAS, gasPrice: GAS_PRICE, from: accounts[0] });
  console.log(interface);
  console.log('Contract deployed to ', result.options.address);
};

deploy();
