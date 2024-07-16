import axios from "axios";

const API_KEY = 'AIzaSyBUQzMpUHzRn48aG9YZ63ICkO1NGq36_f8';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 25,
        key: API_KEY,
        type: 'video',
    },
});

export const searchVideos = async (query) => {
    try {
        const response = await youtube.get('/search', {
            params: {
                q: query,
            },
        });
        return response.data.items;
    } catch (error) {
        console.error('Error fetching videos', error);
        return [];
    }
};