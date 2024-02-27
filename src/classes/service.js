import {makeObservable, observable, computed, action, runInAction} from 'mobx';
const baseUrl='http://localhost:8787'
class Services {
    list = [
        {
            typeService:"פדיקור",
            descraption:"fhfgfg gbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc ",
            img:"https://www.beautycare.co.il/wp-content/uploads/2020/07/1003255_72_comp_1.jpg"
         },
         {
            typeService:"מניקור",
            descraption:"fhfgfg יהעבעיבעיבעיבעבgbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc "
        
         },
         {
            typeService:"מניקור",
            descraption:"fhfgfg יהעבעיבעיבעיבעבgbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc "
        
         },
         {
            typeService:"מניקור",
            descraption:"fhfgfg יהעבעיבעיבעיבעבgbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc "
        
         },

];
    constructor(){
        makeObservable(this, {
            list: observable,
            // addService: action,
            getAllServices: computed,
        });
       
    }

    async addService(Service){
        try{
        const res = await fetch(`${baseUrl}/service`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
            body: JSON.stringify(Service)
        });
        console.log("res" ,res)
        if(res.status==200){
            this.list.push(...Service);
            console.log("sucseed")
        }
    }
       catch(error){
         console.log(error);
       }
    }
    
    get getAllServices(){
        return this.list;
    }
}
const singleton = new Services(); // single object as a class instance
export default singleton; /// export singleton instanceAppointment