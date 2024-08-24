import axios from "axios";

const API_KEY = 'AIzaSyDTyUxCoBceAu0VjfoWWMKBFsx3Ay3m6WI';

const youtube = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
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