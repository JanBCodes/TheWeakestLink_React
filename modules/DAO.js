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
};

class Avatars
{
    id;
    image;
    name;
    key;

    constructor(n,p,d,k)
    {
        this.id = n;
        this.image = p;
        this.name = d;
        this.key = k;
    }
};

// export default Avatars;
// export default RESTAPI;

export { RESTAPI, Avatars }