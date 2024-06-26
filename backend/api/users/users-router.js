const router = require("express").Router();
const Users = require("./users-model");

router.get("/", (req, res) => {
  Users.getAllUsers().then((users) => {
    res.json(users);
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Users.getUserInfo(id).then((user) => {
    res.json(user);
  });
});

router.get("/:id/message", (req, res) => {
  const { id } = req.params;
  Users.getUserMessages(id).then((user) => {
    res.json(user);
  });
});

router.post("/", (req, res) => {
  const user = req.body;
  Users.addUser(user).then((user) => {
    res.status(201).json(user);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Users.remove(id).then(() => {
    res.status(204).end();
  });
});

module.exports = router;
