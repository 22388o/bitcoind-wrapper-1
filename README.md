# bitcoincli-wrapper

## Install
- Run container bitcoind container: ```docker run --user $(id -u):$(id -g) --name testing-btc-live -v /home/aibanez/cyphernode/bitcoin/:/app/data -p 18332:18332 -td test-btc-img```. User and group for ```/home/aibanez/cyphernode/bitcoin/``` needs to be $(id -g)
- ```git clone https://github.com/aitoribanez/bitcoincli-wrapper```
- ```cd bitcoincli-wrapper```
- ```npm install```
- ```npm run start```

## Make new user and get their JWT token
https://loopback.io/doc/en/lb4/Authentication-Tutorial.html#try-it-out

- POST /users
```
{
  "email": "user1@example.com",
  "password": "thel0ngp@55w0rd",
  "firstName": "User",
  "lastName": "One"
}
```
- POST /users/login
```
{
  "email": "user1@example.com",
  "password": "thel0ngp@55w0rd"
}
```

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZjdhMmZhNjIyODM3MjEzODI2YWE2YiIsIm5hbWUiOiJVc2VyIE9uZSIsImlhdCI6MTU3NzQ2MDE3MCwiZXhwIjoxNjM3NDYwMTcwfQ.hJko5UGN-TaS58JokZpWkyeeljt9LcuNG1BwRyaaMrU


## Docker
### TODO bitcoind
- ```WARNING: the RPC server is not safe to expose to untrusted networks such as the public internet
Config options rpcuser and rpcpassword will soon be deprecated. Locally-run instances may remove rpcuser to use cookie-based auth, or may be replaced with rpcauth. Please see share/rpcauth for rpcauth auth generation.```

### bitcoind  (https://github.com/lukechilds/docker-bitcoind)
- https://medium.com/mwpartners/containerizing-bitcoin-and-ethereum-with-docker-7c447b484f3a?
- https://ma.ttias.be/enable-the-rpc-json-api-with-password-authentication-in-bitcoin-core/


- Run container: ```docker run --user $(id -u):$(id -g) --name testing-btc-live -v /home/aibanez/cyphernode/bitcoin/:/app/data -p 18332:18332 -td test-btc-img```. User and group for ```/home/aibanez/cyphernode/bitcoin/``` needs to be $(id -g)
- Make curl using rpcuser/rpcpassword: ```curl --user paco --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getblockcount", "params": [] }' -H 'content-type: text/plain;' http://127.0.0.1:18332/```
- Make curl using authcookie from .cookie: ```curl --data '{"jsonrpc":"1.0","id":"curltext","method":"getblockcount"}'  http://$(cat $HOME/cyphernode/bitcoin/.cookie)@127.0.0.1:18332```

- Build image: ```sudo docker build --build-arg ARCH=amd64 -t lukechilds/bitcoind:amd64 .```

#### bitcoin.conf example for testnet
(use .cookie for authentication)
```
# testnet
testnet=1
server=1
txindex=1
#rpcuser=paco
#rpcpassword=paco

# ATTENTION: VERY DANGEROUS OUTSIDE THE DOCKER NETWORK
[test]
rpcbind=0.0.0.0:18332
rpcallowip=0.0.0.0/0
```

#### .cookie
```
paco:paco
```

### mongo
https://hub.docker.com/_/mongo
https://gist.github.com/davideicardi/f2094c4c3f3e00fbd490
https://subscription.packtpub.com/book/big_data_and_business_intelligence/9781787126480/1/ch01lvl1sec18/running-mongodb-as-a-docker-container

### loopback4
- Esbozo en DockerfileLB4

[![LoopBack](https://github.com/strongloop/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)