import axios from "axios";

export default axios.create({
  baseURL:   "http://localhost:8080",//"http://localhost:8080",   //http://studomia.herokuapp.com/
  headers: {
    "Content-type": "application/json",
    "X-COM-PERSIST": "hello",
     "X-COM-LOCATION":"Abuja"
  }
});

/* below code to get user location:

navigator.geolocation.getCurrentPosition((position) => {
   urlParam = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
  console.log(urlParam);
});
  
 */