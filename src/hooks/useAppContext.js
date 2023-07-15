// import { AppContext } from "pages/_app.page";
import { createContext } from "react";

import { useContext } from "react";
const AppContext = createContext({});
export function useAppContext() {
  return useContext(AppContext);
}
