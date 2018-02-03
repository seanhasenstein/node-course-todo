// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// db.collection('Todos').findOneAndUpdate({
//   _id: new ObjectID('5a75f767f5257e740948e444')
// }, {
//   $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then((result) => {
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5a75e167c6539e14cd2be55f')
}, {
  $set: {
    name: 'Sean'
  },
  $inc: {
      age: 1
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

  // db.close();
});
