const bcrypt = require("bcryptjs");

const securePassword = async (password) => {
    const myPass = await bcrypt.hash(password,10);
    console.log(myPass);

    const matchPass = await bcrypt.compare("12345",myPass);
    console.log(matchPass);
}

securePassword("tops123");