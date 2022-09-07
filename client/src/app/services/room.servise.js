import httpService from './http.service';

const roomEndpoint = '/rooms/';

const roomService = {
    get: async () => {
        const { data } = await httpService.get(roomEndpoint);
        return data;
    },
};

export default roomService;
