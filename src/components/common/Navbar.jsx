// export default Navbar;
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import  './navbar.css'
function Navbar() {
  const { isAuthenticated, role, logout } = useContext(AuthContext);

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to logout?');
    if (confirmLogout) {
      logout();
    }
  };

  return (
    <nav>
      <ul>
        <div className='navbar-span' style={{ color: 'white' }}>
          {!isAuthenticated && <span>EMPLOYEE MANAGEMENT SERVICES</span>}
        </div>
        {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
        {role === 'ADMIN' && <li><Link to="/process-Selection">Assign Interview process</Link></li>}
        {role === 'ADMIN' && <li><Link to="/rejected">Rejected Employees</Link></li>}
        {role === 'ADMIN' && <li><Link to="/approved">Approved Employees</Link></li>}
        {role === 'USER' && <li><Link to="/hdfcmrpage">Manager Response</Link></li>}
        {role === 'HDFC' && <li><Link to="/hdfcmrpage">Manager Response</Link></li>}
        {role === 'ICICI' && <li><Link to="/icicimrpage">Manager Response</Link></li>}
        {role === 'MIS' && <li><Link to="/mispage">Manager Response</Link></li>}
        {isAuthenticated ? (
          <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;