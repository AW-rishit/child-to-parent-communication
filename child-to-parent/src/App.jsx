import Form from "./Form"
import React, {useState} from "react"


function App() {

  const[data, setData] = useState()

  const getData = (data) => {
    setData(data)
  }

  return(<>
    <Form onSubmit = {getData}/>
    <h2>{`I am from the app component: ${data}`}</h2>
  </>)
}

export default App
