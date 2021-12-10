require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remain evil inflict arena flame trigger'; 
let testAccounts = [
"0xb97a9e10d997aa32e5b49675d4f88eb2331381f409e440a87f3672f25020eb5b",
"0x163ef2316a7539d5d00afdbe36155a46a6ec9412319548847ebf5582edbde185",
"0x8ef496f9693fcb9729eb8d1e7e42e9965d3d3f28e85859f3afdc8a4f2375a7be",
"0x15881bd1c5d2dfd58415d032679cda346a0ef9f29287d9cdf7c75c389e5d66e9",
"0xf775db33b4d7d2f061fe6c1e9a3b021da90a6afd2bdd35dd8fd4bff48fa1a063",
"0xcdc565c721c331e56fabc0ddd0d9f7437bdf8d81ced35738dcd5d8945edd8877",
"0x8b1b434004d258bb6ac7e187fbae7f4e1fb36f770d12e554a952a91e36f2b84f",
"0xa096d784043837cb1df6e0d310ada543391abc2e7933cfab92fd6e56314de4bd",
"0xc8004a1dd607b6f2cc35043128467a550a46f3bb2970161adbec6ad3c72e9bfa",
"0x3f14594bfe9b3b767d73a7a211b87fbb897a1052371b9b0e5d64e65fc69da7bf"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

