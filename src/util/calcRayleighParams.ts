import { FreqAndDamp } from "../types/FreqAndDamp";
import { Rayleigh } from "../types/Rayleigh";

export function calcRayleighParams(params: FreqAndDamp): Rayleigh {
  if (!params.isValid) {
    return { isValid: false, alpha: 0, beta: 0 };
  }
  const omega1 = 2 * Math.PI * params.freq1;
  const omega2 = 2 * Math.PI * params.freq2;
  const coef = 2 / (omega2 / omega1 - omega1 / omega2);
  const alpha = coef * (omega2 * params.damp1 - omega1 * params.damp2);
  const beta = coef * (params.damp2 / omega1 - params.damp1 / omega2);
  return { isValid: true, alpha, beta };
}
