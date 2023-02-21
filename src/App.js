import Map from './components/map'
import {useState,useEffect} from 'react'
import Loader from "./components/loader"

function App() {
  const [eventdata, seteventdata] = useState([]);
  const [isloading, setisloading] = useState(false);

  const getevents = async () =>{
    setisloading(true)
    const res = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
    const {events} = await res.json()
    seteventdata(events)
    console.log(events);
    setisloading(false)
  }
  useEffect(() => {
    getevents()
   
  }, []);



  return (
      <header>
      {!isloading ? <Map  eventdata = {eventdata}/> : <Loader />}
      </header>

  );
}

export default App;
