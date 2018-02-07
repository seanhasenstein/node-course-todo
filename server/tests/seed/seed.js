const  { ObjectID } = require('mongodb');
const jwt = require('jsonwebtoken');

const { Todo } = require('./../../models/todo');
const { User } = require('./../../models/user');

const userOneid = new ObjectID();
const userTwoid = new ObjectID();

const users = [{
  _id: userOneid,
  email: 'seanhasenstein@example.com',
  password: 'userOnePass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userOneid, access: 'auth'}, 'abc123').toString()
  }]
}, {
  _id: userTwoid,
  email: 'jen@example.com',
  password: 'userTwoPass',
  tokens: [{
    access: 'auth',
    token: jwt.sign({ _id: userTwoid, access: 'auth'}, 'abc123').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  text: 'First test todo',
  _creator: userOneid
}, {
  _id: new ObjectID(),
  text: 'Second test todo',
  completed: true,
  completedAt: 333,
  _creator: userTwoid
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
   return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    const userOne = new User(users[0]).save();
    const userTwo = new User(users[1]).save();

    Promise.all([userOne, userTwo]);
  }).then(() => done());
};

module.exports = { todos, populateTodos, users, populateUsers };
