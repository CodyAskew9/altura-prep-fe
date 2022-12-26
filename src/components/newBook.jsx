import axios from 'axios'
import React from 'react'


const newBook = () => {
    let regiserBook = (e) => {
        let book =e.taget.value
        axios.post()  
    }
    
  return (
    <div>
        <form>
            <input type="text" />
            <input type="button" value="register" onClick={registerBook} />
        </form>

    </div>
  )
}

export default newBook