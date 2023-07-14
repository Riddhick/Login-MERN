export async function register(values){
    var statusCode
   await fetch('http://localhost:3001/api/register',{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(values)
                })
                .then((response)=>{
                    statusCode=response.status
                    console.log(statusCode)
                })
    return statusCode
}

