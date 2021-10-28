import React, { useState, useEffect } from 'react'

const Son = ({setRem}) => {
    const [myIncome, setMyIncome] = useState(0)

    const changeIncome = (event) => {
        if(event.keyCode == 13){
            setMyIncome(event.target.value)
        }
    }

    useEffect(() => {
        setRem(myIncome)
    }, [myIncome])

    return (
        <>
            <div>Son</div><br/>
            <label>Fill Amount and Press Enter Key</label><br/>
            <input type="number" onKeyUp={(e) => changeIncome(e)} /><hr/>
        </>
    )
}

export default Son;