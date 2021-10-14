const models = require("../models");
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

const registrasiUser = async (req, res) => {
  // Our register logic starts here
  try {
    // Get user input
        const { name, email,password } = req.body;

        // Validate user input
        if (!(email && password && name)) {
          res.status(400).send("All input is required");
        }

        // check if user already exist
        // Validate if user exist in our database
        const oldUser = await models.User.findOne({  where: {
          email: email
        } });

        if (oldUser) {
          return res.status(409).send("User Already Exist. Please Login");
        }

        //Encrypt user password
        encryptedPassword = await bcrypt.hash(password, 10);

        // Create user in our database
        const user = await models.User.create({
          name :name,
          email: email.toLowerCase(), // sanitize: convert email to lowercase
          password: encryptedPassword,
        });

        // Create token
        const token = jwt.sign(
          { id: user.id, email },
         "secret",
          {
            expiresIn: "2h",
          }
        );
        // save user token
        user.token = token;

        // return new user
        res.status(201).json({
          data : user,
          token : token
        });
    } catch (err) {
      console.log(err);
  }
  // Our register logic ends here
};

const loginUser = async (req, res) => {
 // Our login logic starts here
 try {
  // Get user input
  const { email, password } = req.body;

  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  // Validate if user exist in our database
  const user = await models.User.findOne({  where: {
    email: email
  } });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Create token
    const token = jwt.sign(
      { id: user.id, email },
      "secret",
      {
        expiresIn: "2h",
      }
    );

    // save user token
    user.token = token;

    // user
    res.status(200).json({data :user,token : token});
  }
  res.status(400).send("Invalid Credentials");
} catch (err) {
  console.log(err);
}
// Our register logic ends here
};



module.exports = {
  registrasiUser,
  loginUser,
};