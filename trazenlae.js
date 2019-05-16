 async function Trazenlae(jsonlink){
  const response = await fetch(jsonlink);
  const json = await response.json();
  return {
    langify(lang) {
      for(const [key, value] of Object.entries(json[lang])){
        document.querySelector(key).innerHTML = value;
      }
    }
  }
