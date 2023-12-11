import React from 'react'
import "./MyAccount.css"

const MyAccount = () => {
  return (
    <div className='myaccount'>
      <div className="myaccount-head">body</div>
      <div className="myaccount-body">
        <div className="myaccount-body-left">
          <ul>
            <li>Dashoard</li>
            <li>Orders</li>
            <li>Account Detail</li>
            <li>Log Out</li>
          </ul>
        </div>
        <div className="myaccount-body-right">right</div>
      </div>
    </div>
  )
}

export default MyAccount
