const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const db = client.db('recipebook');
const userCollection = db.collection('user');
const recipeCollection = db.collection('recipe');

// This will asynchronously test the connection and exit the process if it fails
(async function testConnection() {
    try {
      await db.command({ ping: 1 });
      console.log(`Connect to database`);
    } catch (ex) {
      console.log(`Unable to connect to database with ${url} because ${ex.message}`);
      process.exit(1);
    }
  })();

function getUser(email) {
  return userCollection.findOne({ email: email });
}

function getUserByToken(token) {
  return userCollection.findOne({ token: token });
}

async function addUser(user) {
  await userCollection.insertOne(user);
}

async function updateUser(user) {
  await userCollection.updateOne({ email: user.email }, { $set: user });
}

async function addRecipe(recipe) {
  return recipeCollection.insertOne(recipe);
}

function getUserRecipes(userName) {
    const query = { userName: userName };
    const options = {
        sort: { recipeName: 1 },
    };
    const cursor = recipeCollection.find(query, options);
    return cursor.toArray();
}

module.exports = {
    getUser,
    getUserByToken,
    addUser,
    updateUser,
    addRecipe,
    getUserRecipes,
  };