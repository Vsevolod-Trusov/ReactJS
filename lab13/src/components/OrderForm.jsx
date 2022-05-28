import React from 'react'
import FirstPage from './FirstPage'
import SecondPage from './SecondPage'
import ThirdPage from './ThirdPage'
import Catalog from './Catalog'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class OrderForm extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={FirstPage} />
                    <Route path="/secondPage" component={SecondPage} />
                    <Route path="/thirdPage" component={ThirdPage} />
                    <Route path="/catalog" component={Catalog} />
                </Switch>
            </Router>
        )
    }
}
export default OrderForm