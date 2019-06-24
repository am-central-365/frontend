import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Skeleton from './components/Skeleton';
import { StoreProvider } from './context/StoreContext';
import './reset.css';

function App() {
    return (
        <StoreProvider>
            <MuiThemeProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Skeleton} />
                    </Switch>
                </BrowserRouter>
            </MuiThemeProvider>
        </StoreProvider>
    );
}

export default App;
