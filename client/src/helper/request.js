export function register(values){
   fetch('http://localhost:3001/api/register',{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(values)
                })
                .then((response)=>{
                    const errCode=response.status
                    console.log(errCode)
                })
    
}

