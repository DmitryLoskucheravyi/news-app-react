export class NewsServices {
    constructor(props) {
        this.props = props
        this._API = 'https://gnews.io/api/v4/search?q=news'
        this._APIKEY = 'dadd7f1c37e472a3a8edee11813e1d2c'
        // this.APIKEY = '39889860da1f411ba225cf0a5a5dff54'

    }
    getResources = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`)
        }

        return await res.json()
    }
    getAllNews(PAGESIZE, n = 1) {
        return this.getResources(
            `${this._API}&max=${PAGESIZE}&page=${n}&apikey=${this._APIKEY}`
        );
    }

    getRandomNews() {
        const today = new Date();
        const from = new Date(today.setHours(0, 0, 0, 0)).toISOString();
        const to = new Date(today.setHours(23, 59, 59, 999)).toISOString();
        
        return this.getResources(`${this._API}&lang=en&from=${from}&to=${to}&max=50&sortby=publishedAt&apikey=${this._APIKEY}`);
    }
}

// https://newsapi.org/v2/everything?
// https://newsapi.org/v2/top-headlines?


