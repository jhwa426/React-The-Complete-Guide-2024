import React, { createContext, useContext } from 'react'

const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error("Error!");
    }

    return ctx;
}

const AccordionItem = ({ id, className, children }) => {
    return (
        <AccordionItemContext.Provider value={id}>
            <li className={className}>
                {children}
            </li>
        </AccordionItemContext.Provider>
    );
}
export default AccordionItem;

// const AccordionItem = ({ id, className, title, children }) => {

//     const { openItemId, openItem, closeItem, toggleItem } = useAccordionContext();

//     const isOpen = openItemId === id;

//     function handleClick() {
//         // if (isOpen) {
//         //     closeItem();
//         // } else {
//         //     openItem(id);
//         // }
//         toggleItem(id);
//     }


//     return (
//         <li className={className}>
//             <h3 onClick={handleClick}>{title}</h3>
//             <div 
//             className={isOpen ? "accordion-item-content open" : "accordion-item-content"}
//             >
//             {children}</div>
//         </li>
//     );
// }

