# local
docker build -t examplenode .
docker run -d -p 4000:3000 --name node-app examplenode

# docker
docker build --platform linux/amd64 -t neopubl/node:1 .
docker push neopubl/node:1
docker run --name examplenode1 -p:4002:3000 -d neopubl/node:1

# harbor
docker build --platform linux/amd64 -t harbor.ks.io:8443/example/node:1 .
docker push harbor.ks.io:8443/example/node:1
docker run --name examplenode1 -p:4002:3000 -d harbor.ks.io:8443/example/node:1
