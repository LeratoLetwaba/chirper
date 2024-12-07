import "./post.scss"
import { Link } from "react-router-dom";
//import Posts from "./Posts";
//import '@material-symbols/font-400'
import { useState } from 'react';

const Accounts = () => {
  const [activeTab, setActiveTab] = useState(null);

  {/*  const posts = [
    {
      id: 1,
      name: "Sean Doe",
      userId: 1,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      name: "Mason Doe",
      userId: 2,
      profilePic:
        "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];*/}

    return (
        <div className="post">
        
      {/* {posts.map(post=>(
        <Posts post={post} key={post.id} />
       ))} */}

<div className="posts">
    
    <div className="contain">
  
     
      <div className="settings-tabs">
        <div className="tab">
          <div onClick={() => setActiveTab(activeTab === 'profile' ? null : 'profile')}>
            <span className="material-symbols-rounded">person</span>
            <span className="tab-text">Profile Settings</span>
          </div>
          {activeTab === 'profile' && (
            <div className="settings-content">
              <div className="profile-settings">
                <div className="settings-section">
                  <div className="profile-picture">
                    <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Profile" />
                    <button className="change-photo">
                      <span className="material-symbols-rounded">photo_camera</span>
                      Change Photo
                    </button>
                  </div>

                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your full name" />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" />
                  </div>

                  <div className="form-group">
                    <label>Bio</label>
                    <textarea placeholder="Write something about yourself"></textarea>
                  </div>

                  <div className="form-group">
                    <label>Location</label>
                    <input type="text" placeholder="Enter your location" />
                  </div>

                  <div className="form-group">
                    <label>Department</label>
                    <select>
                      <option value="">Select Department</option>
                      <option value="marketing">Marketing</option>
                      <option value="it">IT</option>
                      <option value="hr">HR</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>

                  <div className="form-actions">
                    <button className="save-button">Save Changes</button>
                    <button className="cancel-button">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="tab">
          <div onClick={() => setActiveTab(activeTab === 'notifications' ? null : 'notifications')}>
            <span className="material-symbols-rounded">notifications</span>
            <span className="tab-text">Notification Settings</span>
          </div>
          {activeTab === 'notifications' && (
            <div className="settings-content">
              <h3>Notification Settings</h3>
              <div className="notification-settings">
                <div className="notification-group">
                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Email Notifications</h4>
                      <p>Receive notifications about activity via email</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Team Updates</h4>
                      <p>Get notified about team member activities and updates</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Message Notifications</h4>
                      <p>Receive notifications when you get new messages</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                  </div>

                  <div className="notification-item">
                    <div className="notification-info">
                      <h4>Trending Updates</h4>
                      <p>Get notified about trending topics in your network</p>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="form-actions">
                  <button className="save-button">Save Preferences</button>
                  <button className="cancel-button">Reset to Default</button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="tab">
          <div onClick={() => setActiveTab(activeTab === 'security' ? null : 'security')}>
            <span className="material-symbols-rounded">security</span>
            <span className="tab-text">Security Settings</span>
          </div>
          {activeTab === 'security' && (
            <div className="settings-content">
              <div className="security-settings">
                <div className="security-section">
                  <h3>Password Settings</h3>
                  <div className="form-group">
                    <label>Current Password</label>
                    <input type="password" placeholder="Enter current password" />
                  </div>
                  <div className="form-group">
                    <label>New Password</label>
                    <input type="password" placeholder="Enter new password" />
                  </div>
                  <div className="form-group">
                    <label>Confirm New Password</label>
                    <input type="password" placeholder="Confirm new password" />
                  </div>
                  <button className="change-password-btn">Update Password</button>
                </div>

                <div className="security-section">
                  <h3>Two-Factor Authentication</h3>
                  <div className="two-factor-toggle">
                    <div className="toggle-info">
                      <p>Enable two-factor authentication for additional security</p>
                      <span className="security-note">Recommended for better account protection</span>
                    </div>
                    <label className="toggle-switch">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                  </div>
                </div>

                <div className="security-section">
                  <h3>Login History</h3>
                  <div className="login-history">
                    <div className="history-item">
                      <div className="device-info">
                        <span className="material-symbols-rounded">computer</span>
                        <div>
                          <p>Windows PC - Chrome Browser</p>
                          <span>Last accessed: Today, 2:30 PM</span>
                        </div>
                      </div>
                      <span className="current-device">Current Device</span>
                    </div>
                    <div className="history-item">
                      <div className="device-info">
                        <span className="material-symbols-rounded">smartphone</span>
                        <div>
                          <p>iPhone 12 - Safari Browser</p>
                          <span>Last accessed: Yesterday, 8:15 PM</span>
                        </div>
                      </div>
                      <button className="remove-device">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

   

      

      
    </div>
  </div>
        
        </div>
    )
}

export default Accounts