import { createContext, ReactNode, useContext } from "react";

type ExampleContextType = {};
const ExampleContext = createContext<ExampleContextType>(
  {} as ExampleContextType
);

type Props = {
  children: ReactNode;
};
const ExampleProvider = ({ children }: Props) => {
  return (
    <ExampleContext.Provider value={{}}>{children}</ExampleContext.Provider>
  );
};

export const useExample = () => useContext(ExampleContext);
export default ExampleProvider;
