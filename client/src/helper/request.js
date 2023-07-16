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

export async function username(values){
    //console.log(values)
    var statusCode
    await fetch('http://localhost:3001/api/username',{
        method:'POST',
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(values)
    })
    .then((response)=>{
        statusCode=response.status
        //console.log(statusCode)
    })
    .catch((error)=>{
        statusCode=error.status
        //console.log(statusCode)
    })
    return statusCode
}

