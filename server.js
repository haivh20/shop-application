const app = require("./src/app");

const PORT = 3035;

const server = app.listen(PORT, () => {
  console.log(`server listening ${PORT}`);
});

process.on("SIGINT", () => {
  server.close(() => console.log("Server Closed"));
});
