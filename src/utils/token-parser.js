// parsing token from `authorization` header
const tokenParser = (tokenHeader) => {
  const token = tokenHeader && tokenHeader.split(" ")[1];
  return token ? token : null;
};

module.exports = tokenParser;
