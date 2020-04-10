import React from 'react';

const GroupBlockItem = (props) => {
    const { title, planned, spent, remaining } = props;
    return (
        <>
            <li>
                {title}
            </li>
            <li>
                Planned: {planned}
            </li>
            <li>
                Spent / Remaining : {spent} / {remaining}
            </li>
        </>
    )
}

export default GroupBlockItem