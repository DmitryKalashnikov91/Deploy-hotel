// Libraries

import Header from '../../header';
import Sketches from './sketches/Sketches';
import img from './sketches/images/mainMon.png';

const Main = () => {
    return (
        <div className='container-fluid'>
            <Header />
            <div className='main'>
                <h1 className='text-danger'>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>

                <section className='description'>
                    <h2 className='text-danger'>
                        Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                        &quot;Героям России&quot;
                    </h2>
                </section>
            </div>
            <div className='bgimage mb-5'>
                <img src={img} alt='bg' />
            </div>
            <Sketches />
        </div>
    );
};

export default Main;
