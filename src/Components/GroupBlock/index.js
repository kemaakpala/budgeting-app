import React from 'react'
import GroupBlockItem from './GroupBlockItem/'

const GroupBlock = (props) => {
  console.log('props: ', props);
    const {title, groupItems} = props;
    console.log('title:', title, 'groupItems: ', groupItems)
    const itemArr = [{ id: 0, title: 'Council Tax', planned: 146, spent: 0, remaining: 146 }, { id: 1, title: 'Electricity', planned: 56, spent: 56, remaining: 0 },]
    return (
        <>
            <div className="group-block">
                <h2 className="group-title">{title}</h2>
                <div className="group-block-body">
                    <ul>
                        {itemArr.map((item) => {
                            return <GroupBlockItem key={item.id} title={item.title} planned={item.planned} spent={item.spent} remaining={item.remaining} />
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GroupBlock;