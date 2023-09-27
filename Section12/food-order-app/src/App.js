import Header from "./components/Layout/Header";
import React, { Fragment } from "react";
import Meals from "./components/Meals/Meals";

function App() {
    return (
        <Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;
