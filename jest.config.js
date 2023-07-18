module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [],
  testEnvironment: "jsdom",
  extensionsToTreatAsEsm: [".jsx"],
};
