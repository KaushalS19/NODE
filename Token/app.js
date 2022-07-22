const jwt = require("jsonwebtoken");


const generateToken = async () => {

    const key = "kaushalsojitraiskindandhumble";
    const token = await jwt.sign({_id:"62a8270176c1dd590401fee5"},key);
    console.log(token);

    const match = await jwt.verify(token,key);
    console.log(match);
}
generateToken();