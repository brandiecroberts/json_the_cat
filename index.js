const { breedDescription } = require("./breedFetcher");

const input = process.argv;

const breedName = input[2];

breedDescription(breedName, (error, desc) => {
  if (error) {
    console.log("Error fetch details:", error);
  } else {
    console.log(desc);
  }
});