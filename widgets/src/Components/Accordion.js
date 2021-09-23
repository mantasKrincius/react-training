import React, {Component, useState} from "react";


const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const OnTitleClicked = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : ''

        return (
            <React.Fragment key={item.content}>
                <div className={"title" + active}
                     onClick={() => OnTitleClicked(index)}
                >
                    <i className="dropdown icon"></i>
                    <b> Title: {item.title}</b>
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })

    return <div className="ui styled accordion">
        {renderedItems}
    </div>
}

export default Accordion