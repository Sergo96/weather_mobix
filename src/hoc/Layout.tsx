import React from 'react';
import {NewNoteInput} from "../Components/NewNoteInput/NewNoteInput";
import {observer} from "mobx-react-lite";
import {useRootStore} from "../RootStateContext";


interface iLayoutProps {
    children?: React.ReactNode;
}


export const Layout: React.FC<{}> = observer((props: iLayoutProps) => {
    const {rootStore} = useRootStore();

    return (
        <>
            <NewNoteInput addWeather={rootStore.notesStore.searchForWeather} changeCelcius={rootStore.notesStore.changeCels}/>
            {props.children}
        </>
    )
});