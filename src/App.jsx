import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customers from './customers'
import AppointmentList from './appointmentList'
import NewAppointment from './addAppointment'
import Manager from './manager'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      {/* <AppointmentList/>
      <NewAppointment/> */}
     {/* <Customers/> */}
      <Manager/>
      
      
    </>
  )
}

export default App
