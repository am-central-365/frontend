import React, { useContext, useState } from 'react';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useFetchEffect } from './UiFetch';
import { StoreContext } from '../../context/StoreContext';
import styles from './UiInput.jss';
import Icon from "@material-ui/core/Icon";

export function UiInput(props) {
    const { classes } = props;
    useFetchEffect();

    const [ inputString, setInputString ] = useState("");
    const { actions, state} = useContext(StoreContext);
    const onEnter = (e, input) => {
        actions.setInput(input);
    };
    return (
        <div className={classes.input}>
            <div className={classes.statusIcon}>
                <FetchStatus result={state.result} />
            </div>
            <InputBase
                placeholder='Type something and enter …'
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                value={inputString}
                onChange={e => setInputString(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        onEnter(e, inputString);
                    }
                }}
            />
        </div>
    );
}

export function Status(props) {
    const { classes, result } = props;

    if (result.loading) {
        return <CircularProgress className={classes.progress} size='1.2rem' color='inherit' />;
    }
    if (result.error) {
        return <Icon color='error' />;
    }
    return <Icon />;
}

const FetchStatus = withStyles(styles)(Status);

export default withStyles(styles)(UiInput);
