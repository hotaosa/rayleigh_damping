import { Rayleigh } from "../types/Rayleigh";

export function calcRayleighParams(freq1: number, damp1: number, freq2: number, damp2: number): Rayleigh {
  let isValid = true;
  const omega1 = 2 * Math.PI * freq1;
  const omega2 = 2 * Math.PI * freq2;
  const coef = 2 / (omega2 / omega1 - omega1 / omega2);
  const alpha = coef * (omega2 * damp1 - omega1 * damp2);
  const beta = coef * (damp2 / omega1 - damp1 / omega2);
  return {isValid, alpha, beta};
}
