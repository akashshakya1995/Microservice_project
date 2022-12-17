const { dbConnect } = require("../dbConnection")


const orderPlace = async function (req, res) {
  try {
    const { _id, email } = req.userDetails;
    const { productName, stock } = req.body;
    await (await dbConnect()).collection("order").insertOne({ userId: _id, email, productName, stock })
    return sendRes(res, "Successfully Order Place.", true);
  } catch (error) {
    return sendRes(res, error.message, false);
  }
};

const getOrder = async function (req, res) {
  try {
    let result = await (await dbConnect()).collection('order').find().toArray()
    if (!result) {
      throw new Error("This User Is Not Exist Here.");
    }
    return sendRes(res, "Successfully get order!!", true, result);
  } catch (error) {
    return sendRes(res, error.message, false);
  }
}

module.exports = { orderPlace, getOrder }