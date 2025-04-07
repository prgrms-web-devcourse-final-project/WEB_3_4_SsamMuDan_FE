import axios from 'axios';

const baseURL = import.meta.env.VITE_COTREE_BASE_URL;

const coTreeAPI = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  withCredentials: true, // <-- 여기에 추가
});

// // 요청시 처리 ----------
// // 요청 인터셉터 등록
// const onRequest = (config) => {
//   // const jwt = localStorage.getItem('jwt');
//   const token = `
// eyJhbGciOiJIUzUxMiJ9.eyJtaWQiOiI3YWYwNDZkZS1mNTJkLTQ0NmMtOGZjNC0yY2U1NThmYTZmYzciLCJzdWIiOiLtmY3quLjrj5kxIiwicm9sZSI6W3siYXV0aG9yaXR5IjoidXNlciJ9XSwiaWF0IjoxNzQzNzcxOTgzLCJleHAiOjE3NDM3NzMxODN9.bsdSD1JnBOqm-QDC1yJqfWs0LGj76XOwsRT9vnl_Yfir8yB4w7AYHv2QQweuzqK4lfC2VbEI-j4XjHpyz1mDhg`;
//   //   config.headers.Authorization = `Bearer ${token}`; // ✅ Bearer 앞 대소문자도 중요
//   // }
//   return config;
// };

// coTreeAPI.interceptors.request.use(onRequest, (error) => Promise.reject(error));

export default coTreeAPI;
