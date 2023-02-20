const bcrypt = require("bcryptjs");

module.exports = {
  generatePassword: async (password) => {
    return await bcrypt.hash(password, 10)
  },
}
  ;
