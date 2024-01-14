import './Slideshow.scss'
import prevBtn from '../../assets/prevBtn.png'
import nextBtn from '../../assets/nextBtn.png'
import { useState } from 'react';

function Slideshow({logement}) {
    const slides = logement.pictures;

    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = slides.length -1;
        } else if (newIndex >= slides.length) {
            newIndex = 0;
        }
        setActiveIndex(newIndex);
    }

    return <div id='carousel'>
        <div id='itemList' style={{ transform: `translate(-${activeIndex * 100}%)` }}>
            {slides.map((img, index) =>
                <img key={`${logement.id}-img-${index}`} className='item' src={img} />
            )}
        </div>
        {slides.length > 1
            ? <button onClick={() => { updateIndex(activeIndex - 1) }} id='prevBtn'><img src={prevBtn}></img></button>
            : null
        }
        {slides.length > 1
            ? <div id='indicator'>{activeIndex + 1}/{slides.length}</div>
            : null
        }
        {slides.length > 1
            ? <button onClick={() => { updateIndex(activeIndex + 1) }} id='nextBtn'><img src={nextBtn} ></img></button>
            : null
        }
    </div>
}

export default Slideshow