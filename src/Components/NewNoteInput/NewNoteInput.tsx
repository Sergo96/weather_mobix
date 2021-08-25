import React from 'react';
import {NotesStore} from '../../store/NotesStore';
import {alpha, makeStyles, Theme} from '@material-ui/core/styles';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import {AppBar, Button} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import CloudIcon from '@material-ui/icons/Cloud';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useHistory } from 'react-router-dom';
import { ButtonSearch } from './styles';



type NewNoteInputProps = {
    addWeather: NotesStore["searchForWeather"],
    changeCelcius: NotesStore["changeCels"],
}

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
}));


export const NewNoteInput: React.FC<NewNoteInputProps> = ({addWeather, changeCelcius}) => {

    const [note, setNote] = React.useState('');
    const classes = useStyles();
    const [openCityAlert, setOpenCityAlert] = React.useState(false);

    let history = useHistory();

    function handleHomeClick() {
        history.push("/");
    }


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
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton onClick={handleHomeClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <CloudIcon/>
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Weather APP
                        </Typography>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon/>
                            </div>
                            <InputBase
                                value={note}
                                onChange={updateNote}
                                type="text"
                                placeholder="City, State ..."
                                id="standard-basic"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{'aria-label': 'search'}}
                            />
                        </div>
                        <ButtonSearch onClick={onAddNoteClick}>+ Add city</ButtonSearch>
                        <Button onClick={() => changeCelcius()} variant="contained" color="secondary">Change C | F</Button>
                    </Toolbar>
                </AppBar>
            </div>

            <Snackbar open={openCityAlert} autoHideDuration={1000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    City added successfully!
                </Alert>
            </Snackbar>

        </>

    )
}

