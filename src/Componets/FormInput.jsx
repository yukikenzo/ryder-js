import React, { useState } from 'react'

export default function FormInput({ submitted, style, h6, error, ...inputProps }) {
    const [focused, setFocused] = useState(false)
    return (
        <>
            <h6 style={style}>{h6}</h6>
            <input
                onBlur={() => setFocused(true)}
                onFocus={() => inputProps.name === 'repeatPassword' && setFocused(true)}
                focused={(focused || submitted).toString()}
                style={{ width: "100%" }}
                {...inputProps} >
            </input>
            <p5>{error}</p5>
        </>
    )
}
