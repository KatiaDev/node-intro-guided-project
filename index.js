// import the server and start it
//npm init

const server = require("./api/server");

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`\n *** Server is running http://localhost:${PORT} *** \n`);
});
