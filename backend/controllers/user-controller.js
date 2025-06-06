import {
  getAllUsers,
  getUserById,
  updateUserName,
  updateUserAvatar,
  updateUserRole,
  deleteUser,
} from "../db/user-queries.js";

//new user
async function handleCreateUser(req, res) {
  const { name } = req.body;
  try {
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const newUser = await createUser(name);
    res.status(201).json(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ error: "Could not create user" });
  }
}
//get users
async function handleGetAllUsers(req, res) {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json(allUsers);
  } catch (err) {
    console.error("Error fetching all users:", err);
    res.status(500).json({ error: "Could not fetch users" });
  }
}
async function handleGetUserById(req, res) {
  const userId = req.params.id;
  try {
    const user = await getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    res.status(500).json({ error: "Could not fetch user" });
  }
}
//update user role name,avatar
async function handleUpdateUserName(req, res) {
  const userId = req.params.id;
  const { name } = req.body;
  try {
    const updatedUser = await updateUserName(userId, name);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user name:", err);
    res.status(500).json({ error: "Could not update user name" });
  }
}
async function handleUpdateUserAvatar(req, res) {
  const userId = req.params.id;
  const { avatar } = req.body;
  try {
    if (!avatar) {
      return res.status(400).json({ error: "Avatar is required" });
    }
    const updatedUser = await updateUserAvatar(userId, avatar);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user avatar:", err);
    res.status(500).json({ error: "Could not update user avatar" });
  }
}
async function handleUpdateUserRole(req, res) {
  const userId = req.params.id;
  const { role } = req.body;
  try {
    if (!role) {
      return res.status(400).json({ error: "Role is required" });
    }
    const updatedUser = await updateUserRole(userId, role);
    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("Error updating user role:", err);
    res.status(500).json({ error: "Could not update user role" });
  }
}
//delete user
async function handleDeleteUser(req, res) {
  const userId = req.params.id;
  try {
    const deletedUser = await deleteUser(userId);
    res.status(200).json(deletedUser);
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ error: "Could not delete user" });
  }
}
export {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserName,
  handleUpdateUserAvatar,
  handleUpdateUserRole,
  handleDeleteUser,
};
