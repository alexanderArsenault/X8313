import React from 'react';

const List = (props) => {
    return (
        <div className="TabList">
            {props.children}
        </div>
    )
}

export default List