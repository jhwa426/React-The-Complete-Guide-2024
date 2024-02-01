import React, { useRef, useState } from 'react'

const SearchableList = ({ items, children, itemKeyFn }) => {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(event) {
        if (lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null
            setSearchTerm(event.target.value);
        }, 500);
    }

    const searchResult = items.filter(
        item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="searchable-list">
            <input type="search" placeholder="Search" onChange={handleChange} />
            <ul>
                {searchResult.map((index, item) => (
                    <li key={itemKeyFn(item)}>
                        {/* {item.toString()} */}
                        {children(item)}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchableList