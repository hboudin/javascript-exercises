const convertToCelsius = function(fahr) {
  cel = ((fahr - 32) * 5/9)
  celRounded = Math.round(cel*10)/10
  if (Math.floor(cel) !== cel) {
    return celRounded;
  } else {
    return cel
  }
}

const convertToFahrenheit = function(celsius) {
  fahr = ((celsius *9/5) + 32)
  fahrRounded = Math.round(fahr*10)/10
  if (Math.floor(fahr) !== fahr) {
    return fahrRounded;
  } else {
    return fahr
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
