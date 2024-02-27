import { makeObservable, observable, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Business {
    business = {
        id: "123",
        name: "Coding Academy",
        address: "Rothschild 60 Tel Aviv",
        phone: "03-1234567",
        owner: "Yariv Katz",
        logo: "https://i0.wp.com/www.sauchasoap.com/wp-content/uploads/2021/08/%D7%A7%D7%95%D7%9E%D7%A4%D7%95%D7%96%D7%99%D7%A6%D7%99%D7%94-%D7%A1%D7%91%D7%95%D7%A0%D7%99%D7%9D-5.jpg?resize=1024%2C470&ssl=1",
        description: "The best coding academyהעבבכב בכסכבכ בכאבכבכ בכבכבכב כסגאסאג בכארא in the world ניחהבעיבכס העיבכבכסכעסכע בככככככככככככככככככככככככככככככככככככככככככככככככככככככככככככ",
    };

    constructor() {
        makeObservable(this, {
            business: observable,
            addAppointment: action,
        });
    }

    async addAppointment(newBusiness) {
        try {
            const res = await fetch(`${baseUrl}/businessData`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newBusiness)
            });

            if (res.status === 200) {
                const updatedBusiness = await res.json();
                this.business = { ...this.business, ...updatedBusiness };
            }
        } catch (error) {
            console.log(error);
        }
    }

    get getBusiness() {
        return this.business;
    }
}

const singleton = new Business();
export default singleton;
