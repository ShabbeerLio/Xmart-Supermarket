import React, { useState } from 'react'
import "./MyAccount.css"
import Orders from '../../Components/Orders/Orders';
import AccountHead from './AccountHead';
import Profile from '../../Components/Profile/Profile';
import Dashboard from '../../Components/Dashboard/Dashboard';
import Address from '../../Components/Address/Address';

const MyAccount = (props) => {

  const [selectedItem, setSelectedItem] = useState('Dashboard');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDashboardClick = (item) => {
    handleItemClick(item);
  };

  const handleEditProfileClick = () => {
    setSelectedItem('Account Detail');
  };


  return (
    <div className='myaccount'>
      <AccountHead head={selectedItem} />
      <div className="myaccount-body">
        <div className="myaccount-body-left">
          <ul>
            <li
              onClick={() => handleItemClick('Dashboard')}
              className={selectedItem === 'Dashboard' ? 'selected' : ''}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fill="none" stroke="#000000" strokeWidth="2" d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5Zm10 0a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5ZM4 16a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3Zm10-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-6Z"></path>
              </svg>

              Dashboard
            </li>
            <li
              onClick={() => handleItemClick('Orders')}
              className={selectedItem === 'Orders' ? 'selected' : ''}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fill="#000000" d="M4 18V7.1L2.45 3.75q-.175-.375-.025-.763t.525-.562q.375-.175.763-.037t.562.512L6.2 7.05h11.6l1.925-4.15q.175-.375.563-.525t.762.05q.375.175.525.563t-.025.762L20 7.1V18q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18Zm6-5h4q.425 0 .713-.288T15 12q0-.425-.288-.712T14 11h-4q-.425 0-.712.288T9 12q0 .425.288.713T10 13Zm-4 5h12V9.05H6V18Zm0 0V9.05V18Z"></path>
              </svg>

              Orders
            </li>
            <li
              onClick={() => handleItemClick('Account Detail')}
              className={selectedItem === 'Account Detail' ? 'selected' : ''}
            >
              <svg width="1em" height="1em" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fill="#000000" d="M16 7.992C16 3.58 12.416 0 8 0S0 3.58 0 7.992c0 2.43 1.104 4.62 2.832 6.09c.016.016.032.016.032.032c.144.112.288.224.448.336c.08.048.144.111.224.175A7.98 7.98 0 0 0 8.016 16a7.98 7.98 0 0 0 4.48-1.375c.08-.048.144-.111.224-.16c.144-.111.304-.223.448-.335c.016-.016.032-.016.032-.032c1.696-1.487 2.8-3.676 2.8-6.106zm-8 7.001c-1.504 0-2.88-.48-4.016-1.279c.016-.128.048-.255.08-.383a4.17 4.17 0 0 1 .416-.991c.176-.304.384-.576.64-.816c.24-.24.528-.463.816-.639c.304-.176.624-.304.976-.4A4.15 4.15 0 0 1 8 10.342a4.185 4.185 0 0 1 2.928 1.166c.368.368.656.8.864 1.295c.112.288.192.592.24.911A7.03 7.03 0 0 1 8 14.993zm-2.448-7.4a2.49 2.49 0 0 1-.208-1.024c0-.351.064-.703.208-1.023c.144-.32.336-.607.576-.847c.24-.24.528-.431.848-.575c.32-.144.672-.208 1.024-.208c.368 0 .704.064 1.024.208c.32.144.608.336.848.575c.24.24.432.528.576.847c.144.32.208.672.208 1.023c0 .368-.064.704-.208 1.023a2.84 2.84 0 0 1-.576.848a2.84 2.84 0 0 1-.848.575a2.715 2.715 0 0 1-2.064 0a2.84 2.84 0 0 1-.848-.575a2.526 2.526 0 0 1-.56-.848zm7.424 5.306c0-.032-.016-.048-.016-.08a5.22 5.22 0 0 0-.688-1.406a4.883 4.883 0 0 0-1.088-1.135a5.207 5.207 0 0 0-1.04-.608a2.82 2.82 0 0 0 .464-.383a4.2 4.2 0 0 0 .624-.784a3.624 3.624 0 0 0 .528-1.934a3.71 3.71 0 0 0-.288-1.47a3.799 3.799 0 0 0-.816-1.199a3.845 3.845 0 0 0-1.2-.8a3.72 3.72 0 0 0-1.472-.287a3.72 3.72 0 0 0-1.472.288a3.631 3.631 0 0 0-1.2.815a3.84 3.84 0 0 0-.8 1.199a3.71 3.71 0 0 0-.288 1.47c0 .352.048.688.144 1.007c.096.336.224.64.4.927c.16.288.384.544.624.784c.144.144.304.271.48.383a5.12 5.12 0 0 0-1.04.624c-.416.32-.784.703-1.088 1.119a4.999 4.999 0 0 0-.688 1.406c-.016.032-.016.064-.016.08C1.776 11.636.992 9.91.992 7.992C.992 4.14 4.144.991 8 .991s7.008 3.149 7.008 7.001a6.96 6.96 0 0 1-2.032 4.907z"></path>
              </svg>
              Account Detail
            </li>
            <li
              onClick={() => handleItemClick('Address')}
              className={selectedItem === 'Address' ? 'selected' : ''}
            >
              <svg width="1em" height="1em" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path fill="#000000" d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416M512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544"></path>
                <path fill="#000000" d="M512 448a64 64 0 1 0 0-128a64 64 0 0 0 0 128m0 64a128 128 0 1 1 0-256a128 128 0 0 1 0 256m345.6 192L960 960H672v-64H352v64H64l102.4-256zm-68.928 0H235.328l-76.8 192h706.944z"></path>
              </svg>
              Address
            </li>
            <li
              onClick={() => handleItemClick('Log Out')}
              className={selectedItem === 'Log Out' ? 'selected' : ''}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
                <g fill="none" stroke="#000000" strokeLinecap="round" strokeWidth="1.5">
                  <path strokeLinejoin="round" d="M10 12h10m0 0l-3-3m3 3l-3 3"></path>
                  <path d="M4 12a8 8 0 0 1 8-8m0 16a7.985 7.985 0 0 1-6.245-3"></path>
                </g>
              </svg>
              Log Out
            </li>
          </ul>
        </div>
        <div className="myaccount-body-right">
          {/* <h2>{selectedItem}</h2> */}
          <div className="myaccount-body-right-items">
            {selectedItem === 'Dashboard' && (
              <Dashboard
                handleDashboardClick={handleDashboardClick}
                handleEditProfileClick={handleEditProfileClick}
              />
            )}
            {selectedItem === 'Orders' && (
              <Orders />
            )}
            {selectedItem === 'Account Detail' && (
              <Profile/>
            )}
            {selectedItem === 'Address' && (
              <Address />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount
