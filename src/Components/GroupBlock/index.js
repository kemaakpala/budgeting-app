import React from 'react'
import GroupBlockItem from './GroupBlockItem/'

const GroupBlock = (props) => {
  const groupObj = props;

  const renderItems = () => {
    const groupArr = Object.entries(groupObj);

    return groupArr.length ? groupArr.map(([key, value]) => {
      // Pretty straightforward - use key for the key and value for the value.
      // Just to clarify: unlike object destructuring, the parameter names don't matter here.
      return (
        <>
          <div className="group-block">{value.title}</div>
          <div className="group-block-body">
            <ul>
              <li>

                {value.groupItems.map((item) => {
                  return <GroupBlockItem key={item.id} title={item.title} planned={item.planned} spent={item.spent} remaining={item.remaining} />
                })}
              </li>
            </ul>
          </div>
        </>
      )
    }) : null
  }
  return renderItems()
}

export default GroupBlock;