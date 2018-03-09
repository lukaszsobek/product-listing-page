import React from "react";

const Dropdown = props => {
    const { data, dropdownClass, isOpen, updatePage } = props;
    if(!isOpen) {
        return null;
    }

    const list = data.map((dataItem,key) => {
        return (
            <div
                key={key}
                onClick={() => updatePage(dataItem)}
                >{dataItem}</div>
        );
    });

    return(
        <div className={dropdownClass}>
            { list }
        </div>
    );
}

export default Dropdown;