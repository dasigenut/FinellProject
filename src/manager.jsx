import ServiceList from './ServicesList';
import { observer } from 'mobx-react-lite';
import BusinessData from './businessData'
import AddService from './addService'; // שינוי שם היבוא כדי לשים פחות או יותר את אותו שם כמו השם של הקומפוננטה
import * as React from 'react';

const Manager = observer(() => {
    const [showAddService, setShowAddService] = React.useState(false); // הוספת משתנה מקומי כדי לנהל את ההצגה של הקומפוננטה

    return (
        <div>
            {/* כאשר לוחצים על הכפתור, נשנה את ערך המשתנה showAddService ל־true */}
            <button onClick={() => setShowAddService(true)}>AddService</button>
            
            {/* אם המשתנה showAddService הוא true, נציג את הקומפוננטה AddService */}
            {showAddService && <AddService setShowForm={setShowAddService} />}
            
            <BusinessData />
            <br></br>
            <ServiceList />
        </div>
    );
});

export default Manager;
