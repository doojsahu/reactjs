import react, { useEffect, useRef } from 'react';

function UseRef() {

    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, [])

    return (
        <div>
            <label>Email </label>
            <input type="email" ref={emailRef} />
        </div>
    )
}

export default UseRef;