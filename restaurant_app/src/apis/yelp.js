import axios from 'axios';

const URL = 'https://api.yelp.com/v3/businesses';

export default axios.create({
    baseURL: URL,
    headers: {
        Authorization: 'Bearer 4QqNj5cnbJybUL9obMbJuMRCe6WKLCyUIEzZOdlKfgAMSIRsU5edEnUy4U24m-lsYzIF1ZZan21tdFHGquTN3czfGck0KyroXLsqpBBA0g_-URhLFXp5gYYUxJtXXnYx' // API Key
    }
});