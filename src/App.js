import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import { CssBaseline, Container } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'

import NavTop from './components/navigation/NavTop'
import Projects from './pages/Projects'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#456990'
    },
    secondary: {
      main: '#EF767A'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <React.Fragment>
        <CssBaseline />
        <NavTop />
        <Container>
          <BrowserRouter>
            <Switch>
              <Route exact path="/projects" component={ Projects.container }/>  
            </Switch>
          </BrowserRouter>
        </Container>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
