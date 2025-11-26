const authMiddleware = require("./authMiddleware");

const adminMiddleware = (req, res, next) => {
  authMiddleware(req, res, () => {
    if (req.user.role !== "admin") {
      return res
        .status(403)
        .json({ message: "Access denied. Admin role required." });
    }
    next();
  });
};

module.exports = adminMiddleware;
