import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import appointment from './classes/appointment';


const NewAppointment = observer(()=>{
    
    const [data, setData] = useState({
        id: '', serviceType: '', dateTime: '',clientName: '',clientPhone: '',clientEmail: ''
    });
    function handleChange(field, value){
        const tmp = data;
        tmp[field] = value;
        setData(tmp);
    }

    function handleSubmit(e){
        e.preventDefault();
        appointment.addAppointment(data);
    }


    return (<form onSubmit={(e) => handleSubmit(e)}  style={{border: '2px solid black'}}>
        <input type="text" placeholder='id' onChange={(e)=>{handleChange('id', e.target.value)}} />
        <input type="text" placeholder='serviceType' onChange={(e) => handleChange('serviceType', e.target.value)} />
        <input type="text" placeholder='clientName' onChange={(e) => handleChange('clientName', e.target.value)} />
        <input type="text" placeholder='serviceType' onChange={(e) => handleChange('serviceType', e.target.value)} />
        <input type="text" placeholder='clientEmail' onChange={e => handleChange('clientEmail', e.target.value)} />
        <input type="text" placeholder='clientPhone' onChange={e => handleChange('clientPhone', e.target.value)} />
        <input type="date" placeholder='dateTime' onChange={e => handleChange('dateTime', e.target.value)} />
        <button type='submit'>Add</button>
    </form>)
});

export default NewAppointment;