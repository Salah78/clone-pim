import React from 'react'
import { Router, Route, Switch} from 'react-router-dom'
import {Home, About, Chat, Evenement, Profil, Contact} from '../Pages/Home'

const index = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route patch="/" exact component={Home} />
                    <Route path='/about' exact component={About}/>
                    <Route path='/chat' exact component={Chat}/>
                    <Route path='/evenement' exact component={Evenement}/>
                    <Route path='/profil' exact component={Profil}/>
                    <Route path='/contact' exact component={Contact}/>
                </Switch>
            </Router>
        </div>
    )
}

export default index