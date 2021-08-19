import React from 'react';
import {NotesStore} from '../store/NotesStore';
// import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';



type NewNoteInputProps = {
    addWeather: NotesStore["searchForWeather"]
}

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

// const useStyles = makeStyles((theme) => ({
//     root: {
//         width: '100%',
//         '& > * + *': {
//             marginTop: theme.spacing(2),
//         },
//     },
// }));

// const useStyles = makeStyles((theme) => ({
//     root: {
//         '& > *': {
//             margin: theme.spacing(1),
//             width: '25ch',
//         },
//     },
// }));

export const NewNoteInput: React.FC<NewNoteInputProps> = ({addWeather}) => {

    const [note, setNote] = React.useState('');
    // const classes = useStyles();
    const [openCityAlert, setOpenCityAlert] = React.useState(false);


    const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const handleAddClick = () => {
        setOpenCityAlert(true);
    };

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenCityAlert(false);
    };

    const onAddNoteClick = () => {
        addWeather(note);
        setNote('');
        handleAddClick();
    };
    return (
        <>
            <div>
                <TextField value={note} onChange={updateNote} type="text" placeholder="city" id="standard-basic"
                           label="Search city weather"/>
            </div>
            <ButtonSearch onClick={onAddNoteClick}>+ Add city</ButtonSearch>


            <Snackbar open={openCityAlert} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="warning">
                    City added successfully!
                </Alert>
            </Snackbar>

        </>

    )
}

const theme: any = {
    orange: {
        default: "#d88423",
        hover: "#937628"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};


const ButtonSearch = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }

  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

ButtonSearch.defaultProps = {
    theme: "orange"
};