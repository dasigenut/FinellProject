import { observer } from "mobx-react-lite";
const SingleAppointment = observer((props)=>{
    const {id,serviceType,dateTime, clientName,clientPhone,clientEmail } = props;
        
    
    return (<div style={{border: '1px solid red'}}>
       
        <h3>{serviceType}</h3>
        <h3>{dateTime}</h3>
        <h3>{clientName}</h3>
        <h3>{clientPhone}</h3>
        <h3>{clientEmail}</h3>
       

    </div>)
});

export default SingleAppointment;