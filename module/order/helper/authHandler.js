const { verify } = require("jsonwebtoken");
const { dbConnect } = require("../dbConnection")

/************************************************************************************************************
 *                                         User [ Authentication ]
 ************************************************************************************************************/

const jwtVerify = async (req, res, next) => {
  if (
    req.headers.token == "null" ||
    req.headers.token == "" ||
    req.headers.token == "undefined" ||
    req.headers.token == null ||
    req.headers.token == undefined ||
    (req.headers && req.headers.token && req.headers.token.split(' ')[0] !== "Bearer")
  ) {
    return sendRes(res, "authorization token is required as Bearer", false, 401);
  }
  verify(req.headers.token.split(' ')[1], "HELLO_MICROSERVICE_ARCHITECTURE", async function (err, decoded) {
    if (err) {
      return sendRes(res, "Unauthorized Access", false, 401);
    } else {
      const result = await (await dbConnect()).collection("user").findOne({ email: decoded.email })
      if (!result) {
        return sendRes(res, "This user is not exist here.!", false, 404)
      }
      if (result.isLogin == false) {
        return sendRes(res, "Session Expired.", false, 440);
      }
      req.userDetails = result;
      next();

    }
  });
};

module.exports = { jwtVerify };

