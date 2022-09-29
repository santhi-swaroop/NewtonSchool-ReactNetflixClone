import React from 'react';
import Logo from '../images/netflixpic.png';

function Header() {
  return (
    <>
      <section className='navbar navbar-expand-lg header'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-md-12">
              <a href="/" className='navbar-brand wrapper'>
                <i className = "fas fa-video"></i>
                <img className='logo' src={Logo} alt="logo" />
                <h1 className='heading'>Netflix</h1>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header;