

import React, { createRef,useState } from 'react'

function EmailForm({callback}) {
    const [error, seterror] = useState(null)
    const emailRegex=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const emailRef=createRef();

    const handleSubmit=()=>{

        const email=emailRef.current.value;
        if(!emailRegex.test(email))
        {
            console.log("err")
            seterror("Invalid Email");
        }
        else
        {
            let anchor=document.createElement("a");
            anchor.href=`mailto:${email}`;
            anchor.click();
            callback();
        }
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <p style={{color:"red"}}>{error|| ""}</p>
                <input name="email" type="email" ref={emailRef} onChange={()=>seterror(null)}/>
                <div>
                <button onClick={handleSubmit}>Send Email</button>
                <button  onClick={callback}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EmailForm
