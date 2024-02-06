# docker
docker build -t examplenode .
docker run -d -p 4000:3000 --name node-app examplenode