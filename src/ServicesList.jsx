// ServiceList.jsx
import { observer } from 'mobx-react-lite';
import service from './classes/service';
import SingleService from './singleService';

const ServiceList = observer((props) => {
    const { showButton } = props;
    const list = service.getAllServices;

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {list.map((s, index) => (
                <div key={s.typeService} style={{ marginBottom: '10px' }}>
                    <SingleService {...s} showButton={showButton} />
                    {index !== list.length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
});

export default ServiceList;