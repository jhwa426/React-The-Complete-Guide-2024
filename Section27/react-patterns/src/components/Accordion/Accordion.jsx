import React from 'react'
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if (!ctx) {
        throw new Error("AccordionContext Error");
    }
    return ctx;
}

const Accordion = ({ children, className }) => {

    const [openItemId, setOpenItemId] = useState();

    function openItem(id) {
        setOpenItemId(id);
    }

    function closeItem() {
        setOpenItemId(null)
    }

    function toggleItem(id) {
        setOpenItemId(prevId => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId, // openItemId: openItemId
        // openItem, // openItem: openItem
        // closeItem,
        toggleItem, // closeItem: closeItem
    }

    return (
        <AccordionContext.Provider value={contextValue}>
            <ul className={className}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
}

export default Accordion;

Accordion.Item = AccordionItem;