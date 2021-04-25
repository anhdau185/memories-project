import credentials from './credentials.js';

export const CONNECTION_URL = `mongodb+srv://${credentials.USERNAME}:${credentials.PASSWORD}@cluster0.eefb5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
