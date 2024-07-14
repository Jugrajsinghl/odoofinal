import React from 'react';
import './user.css';
import image from '/image.jpg'
import profile_image from '/avatar.jpg'

const UserProfile = () => {
  const LogOut = ()=>{
    localStorage.removeItem('UserInfo')
    window.location.reload()
  }
  const User = JSON.parse(localStorage.getItem('UserInfo'))

  return (
    <>
      <nav className='navbar-user'>
        <div className='navbar-left-item-user'>
          <p>📚</p>
          <p>Public Library</p>
        </div>

        <div className='navbar-right-item-user'>
          <button className='navbar-right-item-user-noti'>🔔<span>0</span></button>
          <button className='navbar-right-item-user-signout' onClick={LogOut}>SignOut</button>
        </div>
      </nav>


      <div className='userProfile'>
      


      <main className='user-main'>
        <div>
          <p className='user-main-title'>Search Books</p>

          <div className='user-main-input'>
            <input type="text" placeholder='Odoo Development' />
            <button>Search</button>
          </div>
        </div>

        <div className='user-main-book'>
          <div className='user-main-book-title'>
            <p>My Books</p>
          </div>

          <div className='user-main-book-bottom'>
            <div>
              <img src="https://via.placeholder.com/100" alt="Book Cover" />
            </div>
            <div className='user-main-book-info'>
              <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, odit.</div>
              <div className='user-main-book-info-div'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero sunt eos vero aliquid est accusamus aspernatur in blanditiis consectetur qui voluptates harum fuga consequuntur nostrum, assumenda voluptatum alias modi nesciunt illo sapiente! Ducimus magnam dolores provident, sed aliquid autem minima quam mollitia atque nam animi nostrum, quaerat recusandae dicta placeat! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, similique!</div>
              <div>
                <button>3 Days Remains</button>
              </div>
            </div>
          </div>


        </div>
      </main>



      <div className="user-profile">
        <h2 className='user-profile-tag'>User Profile</h2>
        <div className="card profile-card">
          <img
            className="profile-image"
            src={profile_image}
            alt="Profile"
          />
          <div className="profile-info">
            <h3>Mitchell Admin</h3>
            <p className='profile-info-your'>YourCompany</p>
            <div className="contact-info">
              <p className='user-address'>
                
                  <div>📍</div>
                  <div className='user-address-area'>
                    <div>215 Vine St</div>
                    <div>Scranton PA 18503</div>
                    <div>United States</div>
                  </div>
{/*                 
                <span role="img" aria-label="address">📍</span> 215 Vine St<br />
                &nbsp; &nbsp; &nbsp; Scranton PA 18503<br />
                &nbsp; &nbsp; &nbsp;United States */}
              </p>
              <p>
                <span role="img" aria-label="phone"></span> +1 555-555-5555
              </p>
              <p className='admin-email'>
                <span role="img" aria-label="email" ></span> admin@yourcompany.example.com
              </p>
            </div>
            <a href="#edit" className="edit-link">Edit information</a>
            <input type="text" className='user-input'/>
          </div>
        </div>
        <div className="card contact-card">
          <h3>Your contact</h3>
          <input type="text" className='user-input'/>
          <div className="contact-details">
            <p className='user-name-right'>Mitchell Admin</p>
            <p>✉ admin@yourcompany.example.com</p>
            <p>📞 +1 555-555-5555</p>
            <p>📍 Scranton</p>
          </div>
        </div>
      </div>


    </div>
    </>


  );
};

export default UserProfile;