// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
export const fetchBlockPage = () => http.get('/homepage/block/page');
export const fetchPersonalized = () => http.get('/personalized?limit=6');
export async function fetchToplisDetail(){
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({id}) => http.get('/playlist/detail', {params: {id}})));
  console.log(playlist.map(item => item.data.playlist));
}
