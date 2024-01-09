import "./Collapse.scss"
import arrow from "../../assets/collapseArrow.png"
import React, { useState } from 'react'

const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);
    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
};

function Collapse({ title, content }) {
    const [toggle, collapse] = useToggle();
    return (
        <div className="collapse">
            <div onClick={collapse} className="collapseBar">
                <p>{title}</p>
                <img className={toggle ? "arrowDown" : "arrowUp"} src={arrow}></img>
            </div>
            <div className={toggle ? "collapseContent contentDown" : "collapseContent contentUp"}>
                {Array.isArray(content) ?
                    <ul>
                        {content.map((li) => <li>{li}</li>)}
                    </ul>
                    :
                    <p>{content}</p>}
            </div>
        </div>
    )
}

export default Collapse