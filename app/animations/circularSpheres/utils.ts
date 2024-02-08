import { Euler, Vector3 } from "@react-three/fiber";

const MIN_RADIUS = 4;
const MAX_RADIUS = 15;
const NUM_POINTS = 1000;
const DEPTH = 2;

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const points = Array.from(
  { length: NUM_POINTS }
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS);
  const randomAngle = Math.random() * Math.PI * 2;

  const x = Math.cos(randomAngle) * randomRadius;
  const y = Math.sin(randomAngle) * randomRadius;
  const z = randomFromInterval(-DEPTH, DEPTH * 2);

  const scale = Math.random() * 3

  return {
    idx: num,
    position: [x, y, z] as Vector3,
    scale: [scale, scale, scale] as Vector3
  };
});