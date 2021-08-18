import React from 'react';
import { NotesStore } from '../store/NotesStore';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import styled from "styled-components";


type NewNoteInputProps = {
    addWeather: NotesStore["searchForWeather"]
}

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

export const NewNoteInput: React.FC<NewNoteInputProps> = ({ addWeather }) => {

    const [note, setNote] = React.useState('');
    const classes = useStyles();


    // console.log(note);


    const updateNote = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNote(event.target.value)
    }

    const onAddNoteClick = () => {
        addWeather(note);
        setNote('');
    };
    return (
        <>
            <div>
                {/* <input  /> */}
                <TextField value={note} onChange={updateNote} type="text" placeholder="city" id="standard-basic" label="Search city weather" />

            </div>
            <ButtonSearch onClick={onAddNoteClick}>Check Weather</ButtonSearch>

        </>

    )
}

const theme:any = {
    blue: {
      default: "#3f51b5",
      hover: "#283593"
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
    theme: "blue"
  };