import { Euler, Vector3 } from "@react-three/fiber";

const LEFT_COLOR = "6366f1";
const RIGHT_COLOR = "8b5cf6"
const NUM_POINTS = 100;

const randomFromInterval = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export const points = Array.from(
  { length: NUM_POINTS }
).map((num) => {
  const vertices = [Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]
  const rotation = [Math.random() * 2, Math.random() * 2, Math.random() * 2]
  const size = Math.random() * 1.5
  const scale = [size, size, size]

  return {
    idx: num,
    position: vertices.map(point => point * Math.random() * 30) as Vector3,
    rotation: rotation as Euler,
    scale: scale as Vector3
  };
});