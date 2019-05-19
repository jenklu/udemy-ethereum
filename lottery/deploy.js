const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile')

const provider = new HDWalletProvider(
    'motor summer almost galaxy symbol letter perfect reward coconut ahead chase toward',
    'https://rinkeby.infura.io/v3/480a47969d664176b7bde7024aaa655c'
);

const web3 = new Web3(provider);
const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log('Contract deployed to ', result.options.address);
};      

deploy();