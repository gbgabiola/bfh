import React from "react";
import ReactDOM from "react-dom";

export const Updateproducts = () => {
    return (
        <>
            <h1>asdasd</h1>
        </>
    );
};

// export default Products;

if (document.getElementById("updateproducts")) {
    ReactDOM.render(
        <Updateproducts />,
        document.getElementById("updateproducts")
    );
}
