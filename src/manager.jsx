import ServiceList from './ServicesList';
import { observer } from 'mobx-react-lite';
import BusinessData from './businessData';
import AddService from './addService';
import * as React from 'react';
import AppointmentList from './appointmentList';

const Manager = observer(() => {
    const [showAddService, setShowAddService] = React.useState(false);

    return (
        <div>
            <button onClick={() => setShowAddService(true)}>AddService</button>
            {showAddService && <AddService setShowForm={setShowAddService} />}
            <BusinessData showLoginn={false} isAdmin={true}/>
            <br></br>
            <ServiceList showButton={false} />
            <AppointmentList/>
        </div>
    );
});

export default Manager;
