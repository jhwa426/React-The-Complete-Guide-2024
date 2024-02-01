import React from 'react'
import { useAccordionContext } from "./Accordion";


const AccordionItem = ({ id, className, title, children }) => {

    const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();

    const isOpen = openItemId === id;

    function handleClick() {
        // if (isOpen) {
        //     closeItem();
        // } else {
        //     openItem(id);
        // }
        toggleItem(id);
    }


    return (
        <li className={className}>
            <h3 onClick={handleClick}>{title}</h3>
            <div className={isOpen ? "accordion-item-content open" : "accordion-item-content"}>{children}</div>
        </li>
    );
}

export default AccordionItem;