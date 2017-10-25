function boxVolume(length, width, height) {
  var cubicCm = length * width * height;
  
  var liters = cubicCm * .001;
  
  return liters;
}

console.log(boxVolume(10, 10, 10));
