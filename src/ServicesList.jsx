import { observer } from 'mobx-react-lite';
import service from './classes/service';
import SingleService from './singleService';
const ServiceList = observer(() => {

    const list = service.getAllServices;

    return (<>
        <div>
            {
                list.map(s => <SingleService key={s.typeService} {...s} />)
            }
        </div>
    </>)
});

export default ServiceList;
