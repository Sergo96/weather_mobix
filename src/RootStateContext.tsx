import React from "react";
import {RootStore} from "./store/NotesStore";


type RootStateContextValue = {
    rootStore: RootStore
}

const RootStateContext = React.createContext<RootStateContextValue>({} as RootStateContextValue)

const rootStore = new RootStore();

export const RootStateProvider: React.FC<React.PropsWithChildren<{}>> = ({children}) => {
    return <RootStateContext.Provider value={{rootStore}}>{children}</RootStateContext.Provider>
}

export const useRootStore = () => React.useContext(RootStateContext)