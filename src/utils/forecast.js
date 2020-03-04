// const request = require("request");

// const forecast = (latitude, longitude, callback) => {
//   const url =
//     "https://api.darksky.net/forecast/bdaa03a8dd1a20b05a50e3799b17e647/" +
//     latitude +
//     "," +
//     longitude;

//   request({ url: url, json: true }, (error, response) => {
//     if (error) {
//       callback("Unable to connect to weather server", undefined);
//     } else if (response.body.error) {
//       callback("Unable to find location", undefined);
//     } else {
//       callback(
//         undefined,
//         "Current Temperature     : " +
//           response.body.currently.temperature +
//           " degress. "
//       );
//       callback(
//         "Precipitation           : " +
//           response.body.currently.precipProbability +
//           " % chance of rain. "
//       );
//       callback(
//         "CloudCover              : " +
//           response.body.currently.cloudCover +
//           "% cloud cover. "
//       );
//       callback("Summary                 : " + response.body.daily.data[0].summary);
//     }
//   });
// };

// module.exports = forecast;

const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/bdaa03a8dd1a20b05a50e3799b17e647/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather server", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      console.log(body.daily.data[0]);
      callback(
        undefined,
        "Summary: " +
          body.daily.data[0].summary +
          " Current Temperature: " +
          body.currently.temperature +
          " degrees. " +
          " With a high of: " +
          body.daily.data[0].temperatureHigh +
          ", and a low of: " +
          body.daily.data[0].temperatureLow +
          "," +
          " With a: " +
          body.currently.precipProbability +
          " % chance of rain."
      );
    }
  });
};

module.exports = forecast;
