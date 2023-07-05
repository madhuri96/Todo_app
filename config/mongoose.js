

// getting-started.js
const mongoose = require('mongoose');

main().then(console.log("succesfully connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/task_list_db');
}