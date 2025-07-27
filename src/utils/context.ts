import {createContext} from "react";
import type {SWContextValue} from "./types-d.ts";
import {navItems} from "./constants.ts";

export const SWContext = createContext<SWContextValue>({
    page: navItems[0],
    changePage: (page:string) => console.log(page)
});