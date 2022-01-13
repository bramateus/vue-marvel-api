import axios from 'axios'
import md5 from 'md5'
// import {VUE_APP_API_PUBLIC_KEY,VUE_APP_API_PRIVATE_KEY} from '@/config/dev.env'


const ts = Number(new Date())
// const publicKey = VUE_APP_API_PUBLIC_KEY
const publicKey = 'd321ec37c30b6d68bb8dcb50ff901465'
const privateKey = '99eda6aa7f34450f80f078e1413b550eb0b6279b'
// const privateKey = VUE_APP_API_PRIVATE_KEY
const hash = md5(ts+privateKey+publicKey)

function api(entity, parameters=''){
   return parameters ? 
   axios.get(`https://gateway.marvel.com/v1/public/${entity}?${parameters}&ts=${ts}&apikey=${publicKey}&hash=${hash}`):
   axios.get(`https://gateway.marvel.com/v1/public/${entity}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
}

// function getComics() {
//    return axios.get(`http://gateway.marvel.com/v1/public/characters/1010914/comic?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
// }

export default api
