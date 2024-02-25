import {makeObservable, observable, computed, action, runInAction} from 'mobx';
const baseUrl='http://localhost:8787'
class Services {
    list = [
        {typeService:"פדיקור",
        descraption:"fhfgfg gbdgdbdtdg dgdgdgdgdgdn fgdgdgd dgdgdbc "
         }
];
    constructor(){
        makeObservable(this, {
            list: observable,
            // addService: action,
            getAllServices: computed,
        });
       
    }

    addAppointment(Service){
        fetch(`${baseUrl}/service`, {
            method: 'POST',
            body: JSON.stringify(Service)
        }).then((res) => {
            res.json();
        }).then(data => {
            console.log(data);//undefined
            this.list.push(...Service);
        }).catch((err)=>{
            console.log(err);
        })
    }
   
    
    get getAllServices(){
        return this.list;
    }
}
const singleton = new Services(); // single object as a class instance
export default singleton; /// export singleton instanceAppointment