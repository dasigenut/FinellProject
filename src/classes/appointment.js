import {makeObservable, observable, computed, action, runInAction} from 'mobx';
const baseUrl='http://localhost:8787'
class Appointment {
    list = [{
        id: "758",
        serviceType: "11",
        dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "אבי כהן",
        clientPhone: "050-1234567",
        clientEmail: "m@m.com",
    },{
        id: "859",
        serviceType: "12",
        dateTime: "2021-06-20T10:00:00.000Z",//מבנה של תאריך ושעה סטנדרטי בjs
        clientName: "רובי לוי",
        clientPhone: "050-588888",
        clientEmail: "m@m.com",
    }];
    constructor(){
        makeObservable(this, {
            list: observable,
            addAppointment: action,
            getAllApointments: computed,
        });
       
    }

    // addAppointment(appointment){
    //     fetch(`${baseUrl}/appointment`, {
    //         method: 'POST',
    //         body: JSON.stringify(appointment)
    //     }).then((res) => {
    //         res.json();
    //     }).then(data => {
    //         console.log(data);//undefined
    //         this.list.push(...appointment);
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    addAppointment(appointment) {
        fetch(`${baseUrl}/appointment`, {
            method: 'POST',
            body: JSON.stringify(appointment)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // הוסף את הנתונים לרשימה
            this.list.push(data);
        })
        .catch(err => {
            console.log(err);
        });
    }
    
    get getAllApointments(){
        return this.list;
    }
}
const singleton = new Appointment(); // single object as a class instance
export default singleton; /// export singleton instanceAppointment