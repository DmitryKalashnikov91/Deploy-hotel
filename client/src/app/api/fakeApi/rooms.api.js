const rooms = [
    {
        _id: '67rdca3eeb7f6fgeed471198',
        name: 'familyRoom',
        title: 'Семейный',
        price: 4500,
        imgUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    },
    {
        _id: '67rdca3eeb7f6fgeed471100',
        name: 'standartRoom',
        title: 'Стандартный',
        price: 3700,
        imgUrl: 'https://images.unsplash.com/photo-1557127275-f8b5ba93e24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        _id: '67rdca3eeb7f6fgeed471550',
        name: 'luxRoom',
        title: 'Люкс',
        price: 7000,
        imgUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
        _id: '67rdca3eeb7f6fgeed473240',
        name: 'buisnesRoom',
        title: 'Бизнес',
        price: 10000,
        imgUrl: 'https://images.unsplash.com/photo-1621891333819-00c206ec8994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(rooms);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(rooms.find((room) => room._id === id));
        }, 1000);
    });

export default {
    fetchAll,
    getById,
};
