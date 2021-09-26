import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Features } from './pages/Features/Features';
import { Home } from './pages/Home/Home';
import { Product } from './pages/Products/Product';
import { ProductSpecific } from './pages/Products/ProductSpecific';



export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/products/:category/:id">
                    <ProductSpecific/>
                </Route>
                <Route path="/products/:category">
                    <Product/>
                </Route>
                <Route path="/contact">
                    <ContactUs/>
                </Route>
                <Route path="/features">
                    <Features/>
                </Route>
                <Route path="/">
                    <Home/>
                </Route> 
            </Switch>
        </Router>
    )
}

    ReactDOM.render(<App/>, document.getElementById('app'));
