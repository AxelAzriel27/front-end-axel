const calculateArea = ({ radius, power = 2, phi = 3.14 }) =>
  phi * Math.pow(radius, power);

export { calculateArea };
