 s=localStorage.getItem("value")
 console.log(s)
 fetch(`https://api.thedogapi.com/v1/breeds`)
      
      
        .then(response => response.json())
        .then(result => {console.log(result)
            comp=document.querySelector('#header4')
            comp.innerHTML=`<div class="c1"><image src=${result[s].image.url}></image></div><div><p><span>Name of the Breed:</span> ${result[s].name}</p></div><div><p><span>Breed is for:</span> ${result[s].bred_for}</p></div><div><p><span>Breed Group:</span> ${result[s].breed_group}</p></div><div><p><span>Life span:</span> ${result[s].life_span}</p></div><div><p><span>Origin:</span> ${result[s].origin}</p></div><div><p><span>temperant:</span> ${result[s].temperament}</p></div>`
        })
        .catch(error => console.log('error', error));