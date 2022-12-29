import { Rayleigh } from "../types/Rayleigh";
import { XYData } from "../types/XYData";

function calcDampingFactor(params: Rayleigh, freq: number): number {
  const { alpha, beta } = params;
  const omega = 2 * Math.PI * freq;
  return (alpha / omega + beta * omega) / 2;
}

export function generateData(params: Rayleigh): XYData {
  let data: XYData = [];
  if (!params.isValid) {
    data.push({ x: 0, y: 0 });
    return data;
  }
  let x = 10;
  let y = calcDampingFactor(params, x);
  data.push({x, y});
  while (x < 10000) {
    let dx = x;
    for (let i = 0; i < 9; ++i) {
      x += dx;
      y = calcDampingFactor(params, x);
      data.push({x, y});
    }
  }
  return data;
}
