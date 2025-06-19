import React, {useState} from 'react'

const Form = (props) => {

    const [name, setName] = useState("")

    function handleChange(e){
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        console.log(`I am from Form component: ${name}`)
        props.onSubmit(name)
    }

    

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={name}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Form
