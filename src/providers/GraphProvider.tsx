import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { GraphRange } from "../types/GraphRange";

type GraphContextType = {
  params: GraphRange;
  setParams: Dispatch<SetStateAction<GraphRange>>;
};

export const GraphRangeContext = createContext<GraphContextType>({} as GraphContextType);

export const GraphRangeProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [params, setParams] = useState<GraphRange>({ xLowerBound: 10, xUpperBound: 1000, yLowerBound: 0, yUpperBound: 0.5 });

  return (
    <GraphRangeContext.Provider value={{ params, setParams }}>
      {children}
    </GraphRangeContext.Provider>
  );
};