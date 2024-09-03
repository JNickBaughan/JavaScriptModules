import pi, { square } from "./math.js";

const radius = 3;
const radiusSquared = square(radius);

console.log(pi * radiusSquared);