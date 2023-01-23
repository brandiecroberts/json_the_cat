const request = require('request');
// console.log(request);

const breedDescription = function(breedName, callback) {
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      console.log("error:", error);
      console.log("statusCode:", response && response.statusCode);
      console.log("body:", body);
      if (error) {
        callback(error);
        return;
      }
      // console.log(body);
      const data = JSON.parse(body);
      if (data.length === 0) {
        callback("breed not found!");
        return;
      }
      const desc = data[0].description;
      if (data[0].name === breedName) {
        callback(undefined, desc);
        return;
      }
    }
  );
};

module.exports = { breedDescription };
