import { observer } from 'mobx-react-lite';
import service from './classes/service';
import SingleService from './singleService';
const ServiceList = observer(() => {

    const list = service.getAllServices;

    return (<>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {
                list.map((s, index) => (
                    <div key={s.typeService} style={{ marginBottom: '10px' }}>
                        <SingleService {...s} />
                        {index !== list.length - 1 && <hr />} {/* מוסיף קו תחתון רק בין האיברים */}
                    </div>
                ))
            }
        </div>
    </>)
});

export default ServiceList;
