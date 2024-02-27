import ServiceList from './ServicesList';
import { observer } from 'mobx-react-lite';
import BusinessData from './businessData'
const Customers=observer(()=>{
    return(
        <div>
        <BusinessData/>
        <br></br>
        <ServiceList/>
        
        </div>
    )
})
export default Customers;


 