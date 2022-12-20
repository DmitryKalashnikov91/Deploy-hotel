import mon1 from './images/monument1.png';
import mon2 from './images/monument2.png';
import mon3 from './images/monument3.png';
import mon4 from './images/monument4.png';
import mon5 from './images/monument5.png';
import mon6 from './images/monument6.png';
import mon7 from './images/monument7.png';
import mon8 from './images/monument8.png';

const Sketches = () => {
    const data = [
        { id: 1, imgSrc: mon1, alt: 'monument' },
        { id: 2, imgSrc: mon2, alt: 'monument' },
        { id: 3, imgSrc: mon3, alt: 'monument' },
        { id: 4, imgSrc: mon4, alt: 'monument' },
        { id: 5, imgSrc: mon5, alt: 'monument' },
        { id: 6, imgSrc: mon6, alt: 'monument' },
        { id: 7, imgSrc: mon7, alt: 'monument' },
        { id: 8, imgSrc: mon8, alt: 'monument' },
    ];
    return (
        <div className='box_img mt-5'>
            {data.map(({ id, imgSrc, alt }) => (
                <div className='sketches' key={id}>
                    <img src={imgSrc} alt={alt} />
                </div>
            ))}
        </div>
    );
};

export default Sketches;
