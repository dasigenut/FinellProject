import { observer } from 'mobx-react-lite';
import appointment from './classes/appointment';
import SingleAppointment from './singleAppointment';
const AppointmentList = observer(() => {

    const list = appointment.getAllApointments;

    return (<>
        <div>
            
            {
                list.map(a => <SingleAppointment key={a.id} {...a} />)
            }
        </div>
    </>)
});

export default AppointmentList;
