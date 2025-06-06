import prisma from "./queries.js";
//create user
async function createUser(name) {
  try {
    const user = await prisma.user.create({
      data: { name },
    });
  } catch (err) {
    console.error("Error creating user:", err);
    throw new Error("Could not create user");
  }
}
//update user name, avatar, and role

async function updateUserName(userId, newName) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { name: newName },
    });
    return updatedUser;
  } catch (err) {
    console.error("Error updating user name:", err);
    throw new Error("Could not update user name");
  }
}
async function updateUserAvatar(userId, newAvatar) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatar: newAvatar },
    });
    return updatedUser;
  } catch (err) {
    console.error("Error updating user avatar:", err);
    throw new Error("Could not update user avatar");
  }
}
async function updateUserRole(userId, newRole) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role: newRole },
    });
    return updatedUser;
  } catch (err) {
    console.error("Error updating user role:", err);
    throw new Error("Could not update user role");
  }
}
//delete user by id
async function deleteUser(userId) {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: userId },
    });
    return deletedUser;
  } catch (err) {
    console.error("Error deleting user:", err);
    throw new Error("Could not delete user");
  }
}
//functions to read users
async function getAllUsers() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    console.error("Error fetching users:", err);
    throw new Error("Could not fetch users");
  }
}
async function getUserById(userId) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    return user;
  } catch (err) {
    console.error("Error fetching user by ID:", err);
    throw new Error("Could not fetch user");
  }
}
export {
  createUser,
  updateUserName,
  updateUserAvatar,
  updateUserRole,
  deleteUser,
  getAllUsers,
  getUserById,
};
