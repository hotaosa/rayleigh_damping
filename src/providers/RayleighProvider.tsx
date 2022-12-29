import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Rayleigh } from "../types/Rayleigh";

type RayleighContextType = {
  params: Rayleigh;
  setParams: Dispatch<SetStateAction<Rayleigh>>;
};

export const RayleighContext = createContext<RayleighContextType>({} as RayleighContextType);

export const RayleighProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [params, setParams] = useState<Rayleigh>({ isValid: false, alpha: 0, beta: 0 });
  
  return (
    <RayleighContext.Provider value={{ params, setParams }} >
      {children}
    </RayleighContext.Provider>
  );
};
