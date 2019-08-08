import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'

import Projects from './pages/Projects'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4db6ac'
    },
    secondary: {
      main: '#fff176'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/projects" component={ Projects.container }/>  
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
