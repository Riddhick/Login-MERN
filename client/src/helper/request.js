export function register(values){
   const response= fetch('http://localhost:3001/api/register',{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(values)
                })

   console.log(response.status) 
   if(response.ok){
    window.location.assign("http://localhost:3000")
   }            
}

