class RESTAPI
{
    getAPIData(endPoint)
    {
        return new Promise((resolve, reject)=>{

            fetch(endPoint)
            .then(response=>response.json())
            .then(jsonObjData=>{
                   
                resolve (jsonObjData);
            })
            .catch(()=>{

                reject();
            });

        })

    }
}

class Avatars
{
    id;
    image;
    name;

    constructor(n,p,d)
    {
        this.id=n;
        this.image=p;
        this.name = d;
    }
}

// export default Avatars;
// export default RESTAPI;

export { RESTAPI, Avatars}