const axios = require("axios");

axios({
    "method":"POST",
    "url":"https://price-analytics.p.rapidapi.com/job",
    "headers":{
    "content-type":"application/x-www-form-urlencoded",
    "x-rapidapi-host":"price-analytics.p.rapidapi.com",
    "x-rapidapi-key":"1c0aa1b244msh08083ef4d7da1ccp1a4332jsn8c630e6ef8c2",
    "useQueryString":true
    },"data":{
    "source":"google",
    "key":"term",
    "country":"us",
    "values":"apple"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })