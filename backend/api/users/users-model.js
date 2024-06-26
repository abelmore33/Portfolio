const db = require("../../dbConfig");

function getAllUsers() {
  return db("user_info");
}

function getUserInfo(id) {
  return db("user_info").where("id", id).first();
}

function getUserMessages(id) {
  return db("user_info").select("message").where("id", id).first();
}

function addUser(user) {
  return db("user_info").insert(user);
}

function update(id, changes) {
  return db("user_info").where({ id }).update(changes);
}

function remove(id) {
  return db("user_info").where({ id }).del();
}

module.exports = {
  getUserInfo,
  getUserMessages,
  getAllUsers,
  addUser,
  update,
  remove,
};
