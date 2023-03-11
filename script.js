var arr=[]

fetch(`https://api.thedogapi.com/v1/breeds`)
      
      
        .then(response => response.json())
        .then(result => {console.log(result)
                arr=result;
                var main=document.querySelector('#header3')  
                
                
                for(i of result){
                        var cnt=document.createElement('div')
                        cnt.setAttribute('id',i.id)
                        cnt.setAttribute("onclick","clicking(this)")

                        cnt.innerHTML=`<a href="index2.html"><p>Name : ${i.name}</p><img src="${i.image.url}" width="200px"></a>`
                        main.append(cnt)
                }


                      
                
                

                

                             


        })
        .catch(error => console.log('error', error));
        
        function clicking(e){
                console.log(arr)
                a=e.getAttribute("id");
                console.log(a);
                s=a-1;
                localStorage.setItem("value",s)
               }  

           


        

        

