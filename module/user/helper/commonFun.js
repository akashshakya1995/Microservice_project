const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");


/***********************************************************************************************************
 *                                     Common Function [ JwtToken-DecryptFun ]
 ***********************************************************************************************************/

const jwtToken = async function (body) {
  const token = jwt.sign(body, "HELLO_MICROSERVICE_ARCHITECTURE", { expiresIn: "1w" });
  return token;
};

const encryptFun = async password => {
  return await CryptoJS.AES.encrypt(password, 'HELLO_MICROSERVICE').toString();

};

const decryptFun = async (inputPass, dbPassword) => {
  try {
    const bytes = await CryptoJS.AES.decrypt(dbPassword, 'HELLO_MICROSERVICE');
    const originalText = await bytes.toString(CryptoJS.enc.Utf8);
    if (originalText === inputPass) {
      return originalText;
    }
  } catch (error) {
    throw new Error("Invalid Credential.");
  }

};

module.exports = {
  jwtToken,
  encryptFun,
  decryptFun,
};
