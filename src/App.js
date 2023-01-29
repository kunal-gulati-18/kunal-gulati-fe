import React from 'react';
import { ChakraProvider } from "@chakra-ui/react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
import Homepage from './components/main-page/Homepage';
import ErrorPage from './components/error-page/404_page';
import NetworkError from './components/error-page/NetworkErrorPage';

const App = () => {
  return (
    <>
    <Online>
    <ChakraProvider>
          <Router>
                <Switch>
                      <Route exact path="/" component = {Homepage}/> 
                      <Route component = {ErrorPage}/> 
                </Switch>
          </Router>
    </ChakraProvider>
    </Online>

    <Offline>
    <ChakraProvider>
        <NetworkError/>
    </ChakraProvider>        
    </Offline>
    </>
  );
}

export default App;
