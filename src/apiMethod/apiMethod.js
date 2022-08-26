const URL = "https://shop-app-react.herokuapp.com/api/"

export const fetchApi=(path)=>{
   fetch(URL+path)
}