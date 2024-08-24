import axios from "axios";

const accessKey = '219c08931b7a21ae3586bfede8c7c4d94170310c';
const url = `https://emoji-api.com/emojis?access_key=${accessKey}`;

export const getEmoji = async () => {
    try {
        const response = await axios.get(url);
        console.log(response.data)
        return response.data;

    } catch (error) {
        console.error('Error fetching videos', error);
        return [];
    }
};