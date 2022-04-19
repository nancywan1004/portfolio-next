import React, {useRef, useState} from "react"
import bcrypt from 'bcryptjs'

const Verification = (props) => {
    const passcodeInput = useRef();
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = () => {
        bcrypt.compare(passcodeInput.current.value, props.passcode, function(err, result) {
            if (result) {
                console.log("It matches!")
                setErrorMessage(null)
                props.allowAccess()
            } else {
                console.log("Invalid access code!")
                setErrorMessage("Invalid access code!")
            }
        })
    }

    return (
        <div>
            <form>
                <label for="passcode" className="py-1">Access Code:</label>
                <input id="passcode" className="shadow mx-3 py-1 border border-r-0 border-gray-300" type="text" name="passcode" ref={passcodeInput}></input>
                <input type="button" className="shadow p-2" value="Submit" onClick={() => handleSubmit()}></input>
            </form>
            {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    )
}

export default Verification;