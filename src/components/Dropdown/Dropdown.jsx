import "./Dropdown.scss"
import arrow from "../../assets/dropdownArrow.png"
import React, { useState } from 'react'

const useToggle = (initialState) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };

    return [toggleValue, toggler]
};


function Dropdown({ title, content }) {
    const [toggle, dropdown] = useToggle();
    return (
        <div className="dropdown">
            <div onClick={dropdown} className="dropdownBar">
                <p>{title}</p>
                <img className={toggle ? "arrowDown" : "arrowUp"} src={arrow}></img>
            </div>
            <div className={toggle ? "dropdownContent contentDown" : "dropdownContent contentUp"}>
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

export default Dropdown