import axios from 'axios'
const KEY ='AIzaSyClXAxdm2n3SAC4KFX0RRMbPXtL_RjTOwg'
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: `${KEY}`
}
})