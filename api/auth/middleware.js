const jwt = require("jsonwebtoken");

const restrictAccess = async (req, res, next) => {
  const token = req.headers.Authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized.Please, sign in." });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized.Please, sign in." });
    }
    console.log("decoded:", decoded);
    req.decoded = decoded;
    next();
  });
};

module.exports = restrictAccess;
