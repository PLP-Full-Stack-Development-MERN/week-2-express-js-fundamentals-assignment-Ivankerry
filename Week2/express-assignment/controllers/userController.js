const getUsers = (req, res) => {
    res.json({ message: "Get all users" });
};

const createUser = (req, res) => {
    res.json({ message: "User created", data: req.body });
};

const updateUser = (req, res) => {
    res.json({ message: `User ${req.params.id} updated`, data: req.body });
};

const deleteUser = (req, res) => {
    res.json({ message: `User ${req.params.id} deleted` });
};

module.exports = { getUsers, createUser, updateUser, deleteUser };
