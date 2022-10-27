// Libraries
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Entertaiments = () => {
    return (
        <Carousel className='carousel items'>
            <Carousel.Item>
                <img
                    className='d-block w-100  rounded'
                    src='https://www.billiard1.ru/upload/iblock/a43/27453b.jpg'
                    alt='bill'
                />
                <Carousel.Caption>
                    <h3>Бильярд: американский, русский</h3>
                    <p>Для отдыха всей семьей и деловых встреч. Бар и калян прилагаются</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 rounded'
                    src='https://www.cariitti.fi/app/uploads/2021/03/omenatie_taive_sauna_3-800x533.jpg'
                    alt='sauna'
                />
                <Carousel.Caption>
                    <p>Спа: сауна и массаж</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className='d-block w-100 rounded'
                    src='https://iqosnew.ru/images/wp-content/uploads/2019/03/kureniya-iqos-v-kafe.jpg'
                    alt='bill'
                />
                <Carousel.Caption>
                    <h3>Уютный ресторан</h3>
                    <p>
                        Проведите время в уютном ресторане, дни рождения, свадьбы, корпоративы и
                        многе другое
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Entertaiments;
