import axios from "axios";

export default {
    getSongs: function () {
        return axios.get('/api/songs/');
    },
    getSong: function (id) {
        return axios.get(`/api/songs/${id}`);
    },
    sendComment: function (comment, id) {
        return axios.post(`/api/comments/${id}`, {
            text: comment
        });
    },
    scrape: function () {
        return axios.get(`http://localhost:3001/api/scrape/`);
    }
}