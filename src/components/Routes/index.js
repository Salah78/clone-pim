import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '../../Pages/Home'
import About from '../../Pages/About'


const index = () => {
    return (
        <div>
            <Router>   
                <Switch>
                     <Route patch="/">
                        <Home />
                    </Route>
                    <Route patch="/about">
                     <About />
                    </Route>
                   
                </Switch>
            </Router>
        </div>
    )
}

export default index