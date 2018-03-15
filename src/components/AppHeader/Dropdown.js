import React from "react";

const Dropdown = props => {
    const { clearFilter, data, dropdownClass, isOpen, toggleFilter } = props;
    if(!isOpen) {
        return null;
    }

    const list = data.map((dataItem,key) => {
        return (
            <div
                key={key}
                onClick={() => toggleFilter(dataItem)}
                >{dataItem}</div>
        );
    });

    return(
        <div className={dropdownClass}>
            { list }
            <div
                onClick={clearFilter}
            >
            ...clear
            </div>
        </div>
    );
}

export default Dropdown;