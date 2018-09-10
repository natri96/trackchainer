FROM docker.io/hyperledger/fabric-peer:x86_64-1.1.0

RUN mkdir /peer
COPY /crypto /peer/crypto
COPY /msp /etc/hyperledger/msp/peer
COPY /users /etc/hyperledger/msp/users
COPY /configtx /etc/hyperledger/configtx 