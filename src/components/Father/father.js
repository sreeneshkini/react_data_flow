import React, { useState } from 'react'
import Mother from '../Mother/mother'
import Son from '../Son/son'

const Father = () => {
    const [money, setMoney] = useState(0)

    const changeMoney = (event) => {
        if(event.keyCode == 13)
            setMoney(event.target.value)
    }

    const updateMoney = (value) => {
        let rem = money - value;
        setMoney(rem)
    }

    return (
        <>
            <div>Father</div><br/>
            <label>Fill Amount and Press Enter Key</label><br/>
            <input type="number" onKeyUp={(e) => changeMoney(e)} /><hr/>

            <Son setRem={updateMoney} />
            <Mother pendingAmount={money} />
        </>
    )
}

export default Father;