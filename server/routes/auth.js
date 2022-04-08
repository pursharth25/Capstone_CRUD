const jwt = require("express-jwt");

const getTokenFromHeaders = req => {
    const {
        headers: { authorization }
    } = req;

    if (authorization && authorization.split(" ")[0] === "Token") {
        return authorization.split(" ")[1];
    }
    return null;
};

const auth = {

    required: jwt({
        secret: "ABCD",    //This we passed as secret key in UserService
        userProperty: "user",
        getToken: getTokenFromHeaders,
        algorithms: ['HS256']
    })

}

module.exports = auth;