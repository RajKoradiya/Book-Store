import React, { useEffect, useState } from 'react'

function Form() {
    const initialValue = -2
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [renderCount, setRenderCount] = useState(initialValue)

    useEffect(() => {
        setRenderCount((prevcount) => prevcount + 1)
    },[firstName,lastName,email,password])
    return (
        <div>
            <div>
                <label>FirstName:</label>
                <input type="text" id='firstname' value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>LastName:</label>
                <input type="text" id='lastname' value={lastName} onChange={(e) => setLastName(e.target.value)}></input>
            </div><div>
                <label>Email:</label>
                <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div><div>
                <label>password:</label>
                <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            
            <div>
                Component is Rendered {renderCount} times.
            </div>
        </div>
    )
}

export default Form
