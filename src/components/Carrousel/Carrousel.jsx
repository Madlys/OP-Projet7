import './Carrousel.scss'
import prevBtn from '../../assets/prevBtn.png'
import nextBtn from '../../assets/nextBtn.png'
import { useState } from 'react';

function Carrousel(prop) {
    const slides = prop.logement.pictures

    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= slides.length) {
            newIndex = slides.length - 1;
        }
        setActiveIndex(newIndex);
    }

    return <div id='carousel'>
        <div id='itemList' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {slides.map((img) =>
                <img className='item' src={img} />
            )}
        </div>
        <button onClick={() => { updateIndex(activeIndex - 1) }} id='prevBtn'><img src={prevBtn} ></img></button>
        <div id='indicator'>{activeIndex + 1}/{slides.length}</div>
        <button onClick={() => { updateIndex(activeIndex + 1) }} id='nextBtn'><img src={nextBtn} ></img></button>
    </div>
}

export default Carrousel