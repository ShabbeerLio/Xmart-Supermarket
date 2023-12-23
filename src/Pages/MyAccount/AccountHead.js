import React from 'react'

const AccountHead = (props) => {
  return (
    <div className="myaccount-head">
        <div className="myaccount-head-img">
          <img src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="myaccount-head-title">
          <h2>Explore</h2>
          <p>{props.head}</p>
        </div>
      </div>
  )
}

export default AccountHead
