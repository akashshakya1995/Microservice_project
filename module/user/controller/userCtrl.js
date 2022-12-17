const { dbConnect } = require("../dbConnection")
const { jwtToken } = require("../helper/commonFun");
const { encryptFun, decryptFun } = require("../helper/commonFun");

const signUp = async function (req, res) {
  try {
    const { email, password, name, gender } = req.body;
    const hashPass = await encryptFun(password);
    const obj = { email, password: hashPass, name, gender, isLogin: false };
    await (await dbConnect()).collection("user").insertOne(obj)
    return sendRes(res, "Successfully SignUp.", true);
  } catch (error) {
    return sendRes(res, error.message, false);
  }
};

const signIn = async function (req, res) {
  try {
    const { email, password } = req.body;
    let result = await (await dbConnect()).collection('user').findOne({ email: email })
    if (!result) {
      throw new Error("This User Is Not Exist Here.");
    }
    const verifyPass = await decryptFun(password, result.password);
    if (!verifyPass) {
      throw new Error("Invalid Credential.");
    }
    const token = await jwtToken({ email: result.email, userId: result._id });
    const response = await (await dbConnect()).collection("user").updateOne({ _id: result._id }, { $set: { isLogin: true } }, { new: true })
    return sendRes(res, "Successfully SignIn.", true, response, token);
  } catch (error) {
    return sendRes(res, error.message, false);
  }
};

const getUser = async function (req, res) {
  try {
    let result = await (await dbConnect()).collection('user').find().toArray()
    if (!result) {
      throw new Error("This User Is Not Exist Here.");
    }
    return sendRes(res, "Successfully get user!!", true, result);
  } catch (error) {
    return sendRes(res, error.message, false);
  }
}
module.exports = { signUp, signIn, getUser }