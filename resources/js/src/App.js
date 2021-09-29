import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { Features } from "./pages/Features/Features";
import { Home } from "./pages/Home/Home";
import { Product } from "./pages/Products/Product";
import { ProductSpecific } from "./pages/Products/ProductSpecific";
import { Signin } from "./pages/LoginRegister/Signin";
import { Signup } from "./pages/LoginRegister/Signup";
import { Sidebarpage } from "./pages/Admin/Sidebarpage";
import { Productpage } from "./pages/Admin/Productpage";
import { Addproductpage } from "./pages/Admin/Addproductpage";

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/products/:category/:id">
                    <ProductSpecific />
                </Route>
                <Route path="/products/:category">
                    <Product />
                </Route>
                <Route path="/contact">
                    <ContactUs />
                </Route>
                <Route path="/features">
                    <Features />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
                <Route path="/Login">
                    <Signin />
                </Route>
                <Route path="/register">
                    <Signup />
                </Route>
                <Route path="/dashboard">
                    <Sidebarpage />
                </Route>
                <Route path="/products">
                    <Productpage />
                </Route>
                <Route path="/addproduct">
                    <Addproductpage />
                </Route>
            </Switch>
        </Router>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));
