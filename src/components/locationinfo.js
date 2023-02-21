

const Locationinfo = ({info}) => {
  return (
    <div className="location-info">
    <h1>Location info</h1>
    <ul>
    <li>ID: <strong>{info.id}</strong></li>
    <li>Title: <strong>{info.title}</strong></li>
    

    </ul>
      
    </div>
  )
}

export default Locationinfo
