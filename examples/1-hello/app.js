const result = document.querySelector('.result');
const fetchData = async () => {
   try {const {data} = await axios.get('/.netlify/functions/1-hello');
  result.textContent=JSON.stringify(data.name);

   } catch (error){
    result.textContent=(error.response.data)


   }
}
fetchData();
