// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';

const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});
// // 添加请求拦截器
// http.interceptors.request.use(function(config){
//   const cookie=store.get('__m__cookie')?? "";
//   config.params=config.params || {}
//   config.params.cookie=cookie
//   console.log(config);
//   return config

// })
// 添加请求拦截器
http.interceptors.request.use(function(config){
  const cookie = store.get('__m__cookie') ?? "";
  config.params = config.params || {};
  config.params.cookie = cookie;
  console.log(config);
  return config;
})
export const fetchBlockPage = () => http.get('/homepage/block/page');
export const fetchPersonalized = () => http.get('/personalized?limit=6');
export async function fetchToplisDetail(){
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(res.data.list.map(({id}) => http.get('/playlist/detail', {params: {id}})));
  console.log(playlist.map(item => item.data.playlist));
}
export const fetchSearchDefault = () => http.get('/search/default');

export const fetchSearchResult = (params) => http.get('/search', { params });

export const fetchSearchSuggest = (keywords) =>
  http.get('/search/suggest', { params: { keywords } });

export const fetchHomeData = () => http.get('/homepage/block/page');
export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`)
export const songQu = (params) => http.get(`/playlist/track/all?id=${params}`)

export const getQRKey=()=>http.get('/login/qr/key');
export const getQrInfo=(key,qrimg=1)=>http.get('/login/qr/create',{params: {key,qrimg}});
export const checkQrStatus =(key)=> http.get('/login/qr/check',{params:{key,timestamp:Date.now()}})

// export const getUserAccount=()=>http.get('/user.account')
export const getUserAccount = () => http.get('/user/account');
// 用户详情
export const getUserDetail = (uid) => http.get('/user/detail',{params:{uid}});

export const musicSlider = (params) => http.get(`related/playlist?id=${params}`)

export const fetchUserPlaylist = (uid) =>
  http.get('/user/playlist', { params: { uid } });

