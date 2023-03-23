const mongoose = require('mongoose');

const conn = mongoose.createConnection(process.env.MONGO_URL);

conn.on('connected', function () {
  console.log('Mongodb::: connected::: ', this.name);
});

conn.on('disconnected', function () {
  console.log(`Mongodb::: disconnected::: ${this.name}`);
});

conn.on('error', (err) => {
  console.log(`Mongodb::: error::: ${err}`);
});

process.on('SIGINT', async () => {
  await conn.close();
  process.exit(0); // will force the process to exit as quickly as possible even if there are still asyn operations pending in event loop
});

module.exports = conn;
