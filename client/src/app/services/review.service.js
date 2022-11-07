import httpService from './http.service';

const reviewEndpoint = '/reviews/';

const reviewService = {
    createReview: async (payload) => {
        const { data } = await httpService.post(reviewEndpoint, payload);
        return data;
    },
    getReviews: async () => {
        const { data } = await httpService.get(reviewEndpoint);
        return data;
    },
    removeReview: async (reviewId) => {
        const { data } = await httpService.delete(reviewEndpoint + reviewId);
        return data;
    },
};

export default reviewService;
