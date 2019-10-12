import axios from 'axios';

const KEY = 'AIzaSyBREhAlHLzotxjqDLwaX33TnV1k4YgcR0k';
// DOCUMENTATIONS:
// https://developers.google.com/youtube/v3/docs/search/list
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})