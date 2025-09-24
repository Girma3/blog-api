/**
 * Returns information about the API.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - An object containing information about the API.
 */
async function getApiInfo(req, res) {
  /**
   * An object containing information about the API.
   * @typedef {Object} ApiInfo
   * @property {string} name - The name of the API.
   * @property {string} version - The version of the API.
   * @property {string} description - A description of the API.
   * @property {Object} routes - An object containing the routes of the API.
   * @property {Object} authRoutes - An object containing the authentication routes of the API.
   * @property {Object} users - An object containing the user related routes of the API.
   * @property {Object} blogs - An object containing the blog related routes of the API.
   * @property {Object} comments - An object containing the comment related routes of the API.
   */
  const apiInfo = {
    name: "Blog API",
    version: "1.0.0",
    description: "A simple blog API",
    routes: {
      auth: "/api/auth",
      users: "/api/users",
      blogs: "/api/blogs",
      comments: "/api/comments",
    },
    authRoutes: {
      signIn: "/api/auth/sign-in",
      logIn: "/api/auth/log-in",
      protected: "/api/auth/protected",
    },
    users: {
      getAll: "/api/users",
      getById: "/api/users/:id",
      create: "/api/users",
      update: "/api/users/:id",
      delete: "/api/users/:id",
    },
    blogs: {
      getAll: "/api/blogs",
      getById: "/api/blogs/:id",
      create: "/api/blogs",
      update: "/api/blogs/:id",
      delete: "/api/blogs/:id",
    },
    comments: {
      getAll: "/api/comments",
      getById: "/api/comments/:id",
      create: "/api/comments",
      update: "/api/comments/:id",
      delete: "/api/comments/:id",
    },
  };
  res.status(200).json(apiInfo);
}

export default getApiInfo;
