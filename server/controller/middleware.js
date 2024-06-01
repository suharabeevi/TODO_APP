const userModel = require("../models/userModel");

const checkForUser = async (req, res, next) => {
  try {
    const userId = req.headers["userid"];
    // console.log(userId, "=============================="
    if (!userId) {
      return res.status(401).json({ message: "UNAUTHORIZED" });
    }
    const user = await userModel.findById(userId)
    console.log(user);
    if(!user){
        return res.status(401).json({ message: "UNAUTHORIZED" });

    }

    req.userId=userId
    next()
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { 
  checkForUser,
};
