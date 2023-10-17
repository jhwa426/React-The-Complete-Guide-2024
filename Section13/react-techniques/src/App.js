import React, { useState } from 'react';

import './App.css';
import Button from "./components/UI/Button/Button";

function App() {
    const [showParagraph, SetShowParagraph] = useState(false);

    const toggleParagraphHandler = () => {
        SetShowParagraph(prevShowParagraph => !prevShowParagraph);
    }
    return (
        <div className="app">
            <h1>Hi there!</h1>
            {showParagraph && <p>This is a paragraph</p>}
            <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
        </div>
    );
}

export default App;
