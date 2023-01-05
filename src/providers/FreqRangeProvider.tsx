import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { FreqRange } from "../types/FreqRange";

type FreqRangeContextType = {
  params: FreqRange;
  setParams: Dispatch<SetStateAction<FreqRange>>;
};

export const FreqRangeContext = createContext<FreqRangeContextType>({} as FreqRangeContextType);

export const FreqRangeProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [params, setParams] = useState<FreqRange>({ lowerBound: 1, upperBound: 10000 });

  return (
    <FreqRangeContext.Provider value={{ params, setParams }}>
      {children}
    </FreqRangeContext.Provider>
  );
};