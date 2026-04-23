import { useHttp } from "../../hooks/http.hook";


export const useNewsServices = () => {
    const _API = 'https://gnews.io/api/v4/search?q=news'
    const _APIKEY = '7f4253bfd10d415630e07d474cb4ca95'
    // this._APIKEY = 'dadd7f1c37e472a3a8edee11813e1d2c'
    // this.APIKEY = '39889860da1f411ba225cf0a5a5dff54'

    const { loading, req, error } = useHttp()

    const getAllNews = (PAGESIZE, n = 1) => {
        return req(
            `${_API}&max=${PAGESIZE}&page=${n}&apikey=${_APIKEY}`
        );
    }

    const getRandomNews = () => {
        const today = new Date(new Date().setDate(new Date().getDate() - 1));
        // const today = new Date();
        const from = new Date(today.setHours(0, 0, 0, 0)).toISOString();
        const to = new Date(today.setHours(23, 59, 59, 999)).toISOString();

        return req(`${_API}&lang=en&from=${from}&to=${to}&max=50&sortby=publishedAt&apikey=${_APIKEY}`);
    }

    return {loading, error, getRandomNews, getAllNews }
}

// https://newsapi.org/v2/everything?
// https://newsapi.org/v2/top-headlines?


