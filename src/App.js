import React from 'react';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom';
import Nav from './Components/Nav';
import Container from './Components/Container';

function App(){
    
   
    return (
        <Router>
            <Nav/>
            
            <Switch>
                <Route exact path="/">
                    <Redirect  to="/tab1"/>
                </Route>
                <Route path="/tab1">
                    <Container />
                </Route>
                <Route path="/tab2">
                    <Container />
                </Route>
                <Route path="/tab3">
                    <Container />
                </Route>
                <Route path="/all">
                 <Container/>
                </Route>
            </Switch>
    
        </Router>
    )

}

export default App;