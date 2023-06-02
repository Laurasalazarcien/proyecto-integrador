// https://dummyjson.com/products?limit=10&skip=10&select=title,price
const config = {
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Origin": "http://127.0.0.1:5173",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  },
};

export default config;
