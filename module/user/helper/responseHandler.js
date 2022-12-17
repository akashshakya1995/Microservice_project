// Response Handler For Get Response In Any File...
global.sendRes = function (res, msg, status, data, token) {
  const meta = { msg, status };
  if (!data) {
    return res.json({ meta });
  }
  if (token) {
    return res.json({ meta, data, token });
  }
  return res.json({ meta, data });
};