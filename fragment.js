import React from 'react';
import { Link } from 'react-router-dom';
import './fragment.css';

const Fragment = () => {
  return (
    <div>
      <nav className="navlinks">
        <ul>
          <li><Link to="/fragment">code wallet</Link></li>
          <li><Link to="/information">infos</Link></li>
        </ul>
      </nav>
      <div>
        <nav className="navlink">
          <ul>
            <li><Link to="/fragment_form">new</Link></li>
          </ul>
        </nav>
        <div className="fragment-list">
          <div id="fragment">
            <h2>{/*titre du fragment*/}</h2>
            <input type="image" src="../assets/images/visibility_24dp_FILL0_wght400_GRAD0_opsz24.png" alt="eye-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fragment;