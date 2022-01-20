const { connect } = require("getstream");
const bcrypt = require("bcrypt");
const StreamChat = require("stream-chat").StreamChat;
const crypto = require("crypto");

require("dotenv").config();

const api_key = process.env.STREAM_API_KEY;
const api_secret = process.env.STREAM_API_SECRET;
const app_id = process.env.STREAM_APP_ID;

const signup = async (req, res) => {
  try {
      // Get the information from the user request
      const { fullName, username, password, phoneNumber } = req.body;
      
      // Create unique userId
      const userId = crypto.randomBytes(16).toString("hex");

    // Connect to client stream server
    const serverClient = connect(api_key, api_secret, app_id);
    
    // Encrpt user password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create user token with clien stream server
    const token = serverClient.createUserToken(userId);
    
    // Send to the user all the data
    res
    .status(200)
    .json({ token, fullName, username, userId, hashedPassword, phoneNumber });
} catch (error) {
    console.log(error);

    res.status(500).json({ message: error });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Connect to client stream server
    const serverClient = connect(api_key, api_secret, app_id);

    // Create an instance
    const client = StreamChat.getInstance(api_key, api_secret);

    // Get all the users from the DB that have this username
    const { users } = await client.queryUsers({ name: username });

    if (!users.length)
      return res.status(400).json({ message: "User not found" });

    // Compare the password that the user entered with the password from the DB
    const success = await bcrypt.compare(password, users[0].hashedPassword);

    // Create user token with clien stream server
    const token = serverClient.createUserToken(users[0].id);

    // Send response to the user
    if (success) {
      res.status(200).json({
        token,
        fullName: users[0].fullName,
        username,
        userId: users[0].id,
      });
    } else {
      res.status(500).json({ message: "Incorrect password" });
    }
  } catch (error) {
    ads;
    console.log(error);

    res.status(500).json({ message: error });
  }
};

module.exports = { signup, login };
