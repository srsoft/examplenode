# docker v1
docker build -t examplenode .

docker run -d -p 4000:3000 --name node-app examplenode

docker run -d -p 4001:3000 --name node-app-1 neopubl/test:3

