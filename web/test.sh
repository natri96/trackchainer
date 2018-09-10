apt update
apt install -y build-essential 
npm i && npm i --only=dev 
npm run build 
npm prune 
apt remove -y build-essential

