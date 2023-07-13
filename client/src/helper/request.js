export function register(values){
    fetch('http://localhost:3001/api/register',{
                    method:'POST',
                    headers:{
                        "Content-type":"application/json"
                    },
                    body:JSON.stringify(values)
                }).then(()=>{
                    console.log(values)
                    const url="http://localhost:3000/"
                    window.location.assign(url)
                }
                    
                )
}

