import React, { Component } from 'react';
import {BrowserRouter as Router,
    Switch,
    Route,
    } from "react-router-dom";

import MainBetweenLeft from '../components/Main/MainBetweenLeft';


class Url extends Component {
    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path="/">
                        <Home />
                    </Route> */}
                    <Route path="/authors">
                        <ListAuthor />
                    </Route>
                   
                  

                    <Route path="/author/edit" children={<EditAuthor />} />
                        
                    
                    
                    {/* <Route path="/chi-tiet/:slug.:id.html" children={<ChiTiet />} />
                    <Route path="/chi-tiet/:slug.:id.html">
                            <ChiTiet />
                        </Route> */}
                    
                    {/* <Route path="/edit/:id">
                        <Edit />
                    </Route> */}
                    
                    
                </Switch>
            </div>
        );
    }
}

export default Url;
