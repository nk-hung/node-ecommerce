const bcrypt = require("bcryptjs");

module.exports = {
  generatePassword: (password) => {
    const hashPassword = bcrypt.genSalt(10, (err, salt) =>
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          console.log("gen password error", error);
        }
        return hash;
      })
    );
    return hashPassword;
  },
};
