# Trackchainer

Trackchainer is a Proof-of-concept (POC) blockchain application in which users can CRUD ( Create, Read, Update and Delete ) data in the blockchain network.

# Prerequisite
##### This program is only working in the linux system with the following installed:
- [NodeJS v8++ && npm v6++]
- [Docker v17++]
- [Golang v1.10++]

# Instruction
### Installation
First make sure the prequisite softwares are installed by checking in the terminal:
```sh
$  docker --version && node --version && go version
```
Make sure the following appear in the terminal: 
If the following output does not show up, please click the link in the prerequisite section and follow the instructions given.
```sh
Docker version 17.12.1-ce, build 7390fc6
v8.11.4
go version go1.10.3 linux/amd64
```
Check the GOPATH
```sh
echo $GOPATH
```
If nothing on terminal, type the following code, otherwise, skip this step.
```sh
sed -i '$ a export GOPATH="$HOME/go"' $HOME/.bashrc
```

Now, clone the repository into your home directory.
```sh
cd && git clone git@github.com:natri96/hyperledger-fabric-POC.git
```
Goto the trackchainer folder and run the bash script.
```sh
cd trackchainer && bash start.sh
```
If the bash fail to run, run it in sudo mode

Make sure the following screen appear in the terminal

![Docker-Sucess](/images/docker-success.png)


Then, goto to the web directory and run the web application.
```sh
cd web && npm install && npm run serve
```

You will see this on terminal

![Web-Success](/images/web-success.png)


Open http://localhost:3000/ in your web browser and there you go!

If you want to clean the environment, run this command in the repository with the clean.sh file.
```sh
bash clean.sh
```
If the command fail, run it in sudo mode

   [NodeJS v8++ && npm v6++]: <https://nodejs.org/en/download/package-manager/>
   [Docker v17++]: <https://docs.docker.com/install/linux/docker-ce/ubuntu/>
   [Hyperledger Fabric v1.2]: <https://hyperledger-fabric.readthedocs.io/en/release-1.2/> 
   [Golang v1.10++]: <https://golang.org/doc/>
