document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user.password);
    if (!user) {
        window.location.href = 'login.html';
    }else{
       const profileName = document.getElementById('profile_name');
       if(profileName){
            profileName.textContent = `Welcome back, ${user.userName}!`
       }
    }

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('user');
            window.location.href = 'login.html';
        });
    }
   

    

    const homeTab = document.getElementById('home_tab');
    const profileTab = document.getElementById('profile_tab');
    const messageTab = document.getElementById('message_tab');
    const historyTab = document.getElementById('history_tab');
    const taskTab= document.getElementById('task_tab');
    const settingTab= document.getElementById('setting_tab');
    const supportTab= document.getElementById('support_tab');
    const privacyTab= document.getElementById('privacy_tab');


    const homeContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        `
        <div class="widgets">
            <div class="widget">
                <h3 class="home-title">Total Users</h3>
                <p class="value">10,483</p>
            </div>
            <div class="widget">
                <h3 class="home-title">Open Tasks</h3>
                <p class="value">32</p>
            </div>
            <div class="widget">
                <h3 class="home-title">Completed Tasks</h3>
                <p class="value">621</p>
            </div>
            <div class="widget">
                <h3 class="home-title">Pending Issues</h3>
                <p class="value">8</p>
            </div>
        </div>

        <div class="row">
            <div class="quick-actions">
                <h2>Quick Actions</h2>
                <button>Create Task</button>
                <button>Send Message</button>
                <button>Edit Report</button>
                <button>Schedule Meeting</button>
            </div>

            <div class="notifications">
                <h2>Notifications</h2>
                <ul>
                    <li>
                        <p>New task assigned: Update user documentation</p>
                        <small>5 minutes ago</small>
                    </li>
                    <li>
                        <p>Meeting reminder: Team standup at 2 PM</p>
                        <small>1 hour ago</small>
                    </li>
                    <li>
                        <p>Project 'Dashboard Redesign' is due tomorrow</p>
                        <small>3 hours ago</small>
                    </li>
                </ul>
            </div>
        </div>

        <div class="recent-activity">
            <h2>Recent Activity</h2>
            <ul>
                <li>
                    <p><strong>Abdoulie Jassey</strong> completed task <strong>Update user onboarding flow</strong></p>
                    <small>10 minutes ago</small>
                </li>
                <li>
                    <p><strong>Babucarr Drammeh</strong> commented on <strong>Bug report #1234</strong></p>
                    <small>1 hour ago</small>
                </li>
                <li>
                    <p><strong>Cherno Bah</strong> created new project <strong>Q3 Marketing Campaign</strong></p>
                    <small>3 hours ago</small>
                </li>
                <li>
                    <p><strong>Dawda Panneh</strong> uploaded file <strong>Q2 Financial Report.pdf</strong></p>
                    <small>Yesterday at 4:30 PM</small>
                </li>
            </ul>
        </div>
        `
        homeTab.style.background = '#001d3d';
        homeTab.style.color = '#fff';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'

    }

    const profileContent = () =>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = `
        <div class="container">
        <div class="msg-header">
            <h1>Profile</h1>
        </div>
        <div class="profile-section">
            <img src="https://via.placeholder.com/150" alt="Profile Picture" class="profile-picture">
            <input type="file" id="profile-picture-upload" style="display: none;">
            <label for="profile-picture-upload" class="btn">Upload New Picture</label>
        </div>
        <div class="profile-section">
            <h2>Profile Details</h2>
            <div class="profile-info">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                <p><strong>Location:</strong> New York, NY</p>
            </div>
            <button class="btn btn-secondary" id="edit-profile-btn">Edit Profile</button>
        </div>
        <div class="profile-section" id="edit-profile-form" style="display: none;">
            <h2>Edit Profile</h2>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" value="John Doe">
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" value="john.doe@example.com">
                </div>
                <div class="form-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" value="+1 (555) 123-4567">
                </div>
                <div class="form-group">
                    <label for="location">Location</label>
                    <input type="text" id="location" value="New York, NY">
                </div>
                <button type="submit" class="btn">Save Changes</button>
            </form>
        </div>
        <div class="profile-section">
            <h2>Account Settings</h2>
            <button class="btn">Change Password</button>
            <button class="btn">Update Email Preferences</button>
        </div>
        <div class="profile-section">
            <h2>Activity Log</h2>
            <ul class="activity-log">
                <li class="activity-item">
                    <p>Updated profile picture</p>
                    <span class="activity-date">2023-08-15 14:30</span>
                </li>
                <li class="activity-item">
                    <p>Changed password</p>
                    <span class="activity-date">2023-08-10 09:15</span>
                </li>
                <li class="activity-item">
                    <p>Updated email preferences</p>
                    <span class="activity-date">2023-08-05 11:45</span>
                </li>
                <li class="activity-item">
                    <p>Logged in from new device</p>
                    <span class="activity-date">2023-07-30 18:20</span>
                </li>
            </ul>
        </div>
    </div>
        `
        document.getElementById('edit-profile-btn').addEventListener('click', () => {
            document.getElementById('edit-profile-form').style.display = 'block';
        });
        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#001d3d';
        profileTab.style.color = '#fff';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const messageContent = ()=>{

        const mainArea =  document.getElementById('main_area');
        mainArea.innerHTML = 
        `
        <div class="container">
        <div class="msg-header">
            <h1 class="title">Messages</h1>
            <button class="compose-btn">Compose</button>
        </div>
        <div class="search-filter">
            <input type="text" placeholder="Search messages...">
            <select>
                <option>All Messages</option>
                <option>Unread</option>
                <option>Flagged</option>
            </select>
        </div>
        <div class="msg-tabs">
            <div class="msg-tab active">Inbox</div>
            <div class="msg-tab">Sent Messages</div>
        </div>
        <ul class="message-list">
            <li class="message-item unread">
                <span class="sender">John Doe</span>
                <span class="time">10:30 AM</span>
                <div class="preview">Hey, I wanted to discuss the project...</div>
            </li>
            <li class="message-item">
                <span class="sender">Jane Smith</span>
                <span class="time">Yesterday</span>
                <div class="preview">Thank you for your quick response...</div>
            </li>
            <li class="message-item">
                <span class="sender">Team Updates</span>
                <span class="time">2 days ago</span>
                <div class="preview">Weekly progress report attached...</div>
            </li>
            <li class="message-item unread">
                <span class="sender">Alice Johnson</span>
                <span class="time">3 days ago</span>
                <div class="preview">Reminder: Team meeting tomorrow at 2 PM...</div>
            </li>
        </ul>
    </div>
        
        
        `










        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#001d3d'
        messageTab.style.color = '#fff'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const historyContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        
        `
        <div class="container">
        <div class="msg-header">
            <h1 class="title">History</h1>
            <button class="export-btn">Export History</button>
        </div>
        <div class="filters">
            <select>
                <option>All Activities</option>
                <option>Messages History</option>
                <option>Task History</option>
                <option>Profile Changes</option>
            </select>
            <input type="text" placeholder="Search history...">
        </div>
        <ul class="timeline">
            <li class="event">
                <div class="event-icon">T</div>
                <div class="event-content">
                    <div class="event-title">Task Completed: Project Proposal</div>
                    <div class="event-date">August 15, 2023 - 3:30 PM</div>
                </div>
            </li>
            <li class="event">
                <div class="event-icon">M</div>
                <div class="event-content">
                    <div class="event-title">Message Sent to: John Doe</div>
                    <div class="event-date">August 14, 2023 - 11:45 AM</div>
                </div>
            </li>
            <li class="event">
                <div class="event-icon">P</div>
                <div class="event-content">
                    <div class="event-title">Profile Updated: Changed Profile Picture</div>
                    <div class="event-date">August 12, 2023 - 2:15 PM</div>
                </div>
            </li>
            <li class="event">
                <div class="event-icon">T</div>
                <div class="event-content">
                    <div class="event-title">Task Created: Review Client Feedback</div>
                    <div class="event-date">August 10, 2023 - 9:00 AM</div>
                </div>
            </li>
        </ul>
    </div>
        
        `

        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#001d3d'
        historyTab.style.color = '#fff'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const taskContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        `
         <div class="container">
        <div class="msg-header">
            <h1 class="title">Tasks</h1>
            <button class="add-task-btn">Add New Task</button>
        </div>
        <div class="filters">
            <select>
                <option>All Tasks</option>
                <option>Pending</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>
            <select>
                <option>Sort by Date</option>
                <option>Sort by Priority</option>
                <option>Sort by Status</option>
            </select>
        </div>
        <ul class="task-list">
            <li class="task-item">
                <div class="task-details">
                    <div class="task-title">Complete project proposal</div>
                    <div class="task-meta">
                        Due: Aug 15, 2023 | Assigned to: John Doe | <span class="priority-high">High Priority</span>
                    </div>
                </div>
                <div class="task-progress">
                    <div class="progress-bar" style="width: 70%;"></div>
                </div>
            </li>
            <li class="task-item">
                <div class="task-details">
                    <div class="task-title">Review client feedback</div>
                    <div class="task-meta">
                        Due: Aug 10, 2023 | Assigned to: Jane Smith | <span class="priority-medium">Medium Priority</span>
                    </div>
                </div>
                <div class="task-progress">
                    <div class="progress-bar" style="width: 30%;"></div>
                </div>
            </li>
            <li class="task-item">
                <div class="task-details">
                    <div class="task-title">Update team documentation</div>
                    <div class="task-meta">
                        Due: Aug 20, 2023 | Assigned to: Mike Johnson | <span class="priority-low">Low Priority</span>
                    </div>
                </div>
                <div class="task-progress">
                    <div class="progress-bar" style="width: 100%;"></div>
                </div>
            </li>
        </ul>
    </div>
        
        `





        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#001d3d'
        taskTab.style.color = '#fff'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const settingContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        `
        <div class="container">
        <div class="msg-header">
            <h1 class="title">Settings</h1>
        </div>
        <div class="settings-section">
            <h2>General Settings</h2>
            <div class="form-group">
                <label for="language">Language</label>
                <select id="language">
                    <option>English</option>
                    <option>Spanish</option>
                    <option>French</option>
                </select>
            </div>
            <div class="form-group">
                <label for="timezone">Time Zone</label>
                <select id="timezone">
                    <option>UTC-05:00 Eastern Time (US & Canada)</option>
                    <option>UTC+00:00 London</option>
                    <option>UTC+01:00 Paris</option>
                </select>
            </div>
            <div class="form-group">
                <label for="theme">Theme</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="theme">
                    <span class="slider"></span>
                </label>
                <span>Dark Mode</span>
            </div>
        </div>
        <div class="settings-section">
            <h2>Notifications Settings</h2>
            <div class="form-group">
                <label for="email-notif">Email Notifications</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="email-notif" checked>
                    <span class="slider"></span>
                </label>
                <span>Enable Email Notifications</span>
            </div>
            <div class="form-group">
                <label for="sms-notif">SMS Notifications</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="sms-notif">
                    <span class="slider"></span>
                </label>
                <span>Enable SMS Notifications</span>
            </div>
        </div>
        <div class="settings-section">
            <h2>Privacy Settings</h2>
            <div class="form-group">
                <label for="profile-visibility">Profile Visibility</label>
                <select id="profile-visibility">
                    <option>Public</option>
                    <option>Friends Only</option>
                    <option>Private</option>
                </select>
            </div>
        </div>
        <div class="settings-section">
            <h2>Security Settings</h2>
            <div class="form-group">
                <label for="two-factor">Two-Factor Authentication</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="two-factor">
                    <span class="slider"></span>
                </label>
                <span>Enable Two-Factor Authentication</span>
            </div>
            <div class="form-group">
                <label for="new-password">Change Password</label>
                <input type="password" id="new-password" placeholder="New Password">
            </div>
        </div>
        <div class="settings-section">
            <button class="save-btn">Save Changes</button>
        </div>
    </div>
        
        
        `

        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#001d3d'
        settingTab.style.color = '#fff'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const supportContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        `
        <div class="container">
        <div class="msg-header">
            <h1 class="title">Support</h1>
        </div>
        <div class="support-section">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-item">
                <div class="faq-question">How do I reset my password?</div>
                <div class="faq-answer">To reset your password, go to the login page and click on the "Forgot Password" link. Follow the instructions sent to your email to create a new password.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">How can I upgrade my account?</div>
                <div class="faq-answer">To upgrade your account, go to the Settings tab and look for the "Account Upgrade" option. Choose your desired plan and follow the payment instructions.</div>
            </div>
            <div class="faq-item">
                <div class="faq-question">What payment methods do you accept?</div>
                <div class="faq-answer">We accept major credit cards (Visa, MasterCard, American Express) and PayPal for all transactions.</div>
            </div>
        </div>
        <div class="support-section">
            <h2>Contact Support</h2>
            <form class="contact-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" required>
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" required>
                </div>
                <div class="form-group">
                    <label for="subject">Subject</label>
                    <input type="text" id="subject" required>
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                <button type="submit" class="submit-btn">Submit</button>
            </form>
        </div>
        <div class="support-section">
            <h2>Community Forum</h2>
            <p>Visit our <a href="#">Community Forum</a> to connect with other users, share tips, and find solutions to common issues.</p>
        </div>
        <div class="support-section">
            <h2>Live Chat</h2>
            <div class="live-chat">
                <p>Need immediate assistance? Start a live chat with our support team.</p>
                <button class="submit-btn">Start Chat</button>
            </div>
        </div>
    </div>
        
        `

        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#001d3d'
        supportTab.style.color = '#fff'

        privacyTab.style.background = '#fff'
        privacyTab.style.color = '#001d3d'
    }

    //To be implemented
    const privacyContent = ()=>{
        const mainArea = document.getElementById('main_area');
        mainArea.innerHTML = 
        `
        <div class="container">
        <div class="msg-header">
            <h1 class="title">Privacy</h1>
        </div>
        <div class="privacy-section">
            <h2 class="title">Privacy Policy</h2>
            <p>Our privacy policy outlines how we collect, use, and protect your personal information. Please review it carefully.</p>
            <a href="#">View Full Privacy Policy</a>
        </div>
        <div class="privacy-section">
            <h2>Permissions Settings</h2>
            <div class="form-group">
                <label for="location-access">Location Access</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="location-access">
                    <span class="slider"></span>
                </label>
                <span>Allow access to your location</span>
            </div>
            <div class="form-group">
                <label for="camera-access">Camera Access</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="camera-access">
                    <span class="slider"></span>
                </label>
                <span>Allow access to your camera</span>
            </div>
        </div>
        <div class="privacy-section">
            <h2>Data Management</h2>
            <button class="btn">Export My Data</button>
            <button class="btn btn-danger">Delete My Account</button>
        </div>
        <div class="privacy-section">
            <h2>Consent Management</h2>
            <div class="form-group">
                <label for="marketing-consent">Marketing Communications</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="marketing-consent" checked>
                    <span class="slider"></span>
                </label>
                <span>Receive marketing emails and notifications</span>
            </div>
            <div class="form-group">
                <label for="data-sharing">Data Sharing</label>
                <label class="toggle-switch">
                    <input type="checkbox" id="data-sharing">
                    <span class="slider"></span>
                </label>
                <span>Allow sharing of non-personal data for service improvement</span>
            </div>
        </div>
        <div class="privacy-section">
            <h2>Cookies Settings</h2>
            <div class="form-group">
                <label for="cookie-preference">Cookie Preference</label>
                <select id="cookie-preference">
                    <option>Accept All Cookies</option>
                    <option>Essential Cookies Only</option>
                    <option>Custom Settings</option>
                </select>
            </div>
            <button class="btn">Manage Cookie Preferences</button>
        </div>
    </div>
        
        
        `

        homeTab.style.background = '#fff';
        homeTab.style.color = '#001d3d';

        profileTab.style.background = '#fff';
        profileTab.style.color = '#001d3d';

        messageTab.style.background = '#fff'
        messageTab.style.color = '#001d3d'

        historyTab.style.background = '#fff'
        historyTab.style.color = '#001d3d'

        taskTab.style.background = '#fff'
        taskTab.style.color = '#001d3d'

        settingTab.style.background = '#fff'
        settingTab.style.color = '#001d3d'

        supportTab.style.background = '#fff'
        supportTab.style.color = '#001d3d'

        privacyTab.style.background = '#001d3d'
        privacyTab.style.color = '#fff'
    }

homeTab.addEventListener('click', homeContent);
profileTab.addEventListener('click', profileContent);
messageTab.addEventListener('click', messageContent);
historyTab.addEventListener('click', historyContent);
taskTab.addEventListener('click', taskContent);
settingTab.addEventListener('click', settingContent);
supportTab.addEventListener('click', supportContent);
privacyTab.addEventListener('click', privacyContent);


const dashbaord = document.getElementById('dashboard');
if(dashbaord){
    homeContent();
    
}

// Quick Actions
const quickActions = document.querySelectorAll('.quick-actions button');
quickActions.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Action: ${this.textContent}`);
    });
});

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to update widget values
function updateWidgetValue(widget, change) {
    const valueElement = widget.querySelector('.value');
    let currentValue = parseInt(valueElement.textContent.replace(/,/g, ''));
    currentValue += change;
    valueElement.textContent = formatNumber(currentValue);
}

// Function to add a new notification
function addNotification(message, time) {
    const notifications = document.querySelector('.notifications ul');
    const newNotification = document.createElement('li');
    newNotification.innerHTML = `
        <p>${message}</p>
        <small>${time}</small>
    `;
    notifications.insertBefore(newNotification, notifications.firstChild);
    if (notifications.children.length > 3) {
        notifications.removeChild(notifications.lastChild);
    }
}

// Function to add a new activity
function addActivity(user, action, item, time) {
    const activities = document.querySelector('.recent-activity ul');
    const newActivity = document.createElement('li');
    newActivity.innerHTML = `
        <p><strong>${user}</strong> ${action} <strong>${item}</strong></p>
        <small>${time}</small>
    `;
    activities.insertBefore(newActivity, activities.firstChild);
    if (activities.children.length > 4) {
        activities.removeChild(activities.lastChild);
    }
}

// Simulating real-time updates
setInterval(function() {
    // Update a random widget value
    const widgets = document.querySelectorAll('.widget');
    const randomWidget = widgets[Math.floor(Math.random() * widgets.length)];
    const change = Math.floor(Math.random() * 10) - 5; // Random change between -5 and 5
    updateWidgetValue(randomWidget, change);

    // Add a new notification
    const notificationMessages = [
        "New user registered",
        "Task completed",
        "Meeting scheduled",
        "Report generated"
    ];
    const randomMessage = notificationMessages[Math.floor(Math.random() * notificationMessages.length)];
    addNotification(randomMessage, "Just now");

    // Add a new activity
    const users = ["Alice", "Bob", "Charlie", "Diana"];
    const actions = ["completed", "created", "updated", "deleted"];
    const items = ["task", "project", "report", "meeting"];
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    const randomItem = items[Math.floor(Math.random() * items.length)];
    addActivity(randomUser, randomAction, randomItem, "Just now");
}, 5000); // Update every 5 seconds

// Search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

function performSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    alert(`Searching for: ${searchTerm}`);
    // Here you would typically send this search term to a server
    // or filter local data. For now, we'll just alert the search term.
}

searchButton.addEventListener('click', performSearch);
searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
}

const editProfileBtn = document.getElementById('edit-profile');
    const modal = document.getElementById('edit-profile-modal');
    const closeBtn = modal.querySelector('.close');
    const profileForm = document.getElementById('profile-form');
    const profileUpload = document.getElementById('profile-upload');
    const profileImage = document.getElementById('profile-image');

    // Open modal
    editProfileBtn.addEventListener('click', function() {
        modal.style.display = 'block';
        document.getElementById('edit-name').value = document.getElementById('user-name').textContent;
        document.getElementById('edit-email').value = document.getElementById('user-email').textContent;
        document.getElementById('edit-phone').value = document.getElementById('user-phone').textContent;
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal if clicked outside
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    profileForm.addEventListener('submit', function(e) {
        e.preventDefault();
        document.getElementById('user-name').textContent = document.getElementById('edit-name').value;
        document.getElementById('user-email').textContent = document.getElementById('edit-email').value;
        document.getElementById('user-phone').textContent = document.getElementById('edit-phone').value;
        modal.style.display = 'none';

        // Add to activity log
        addActivity('Profile updated');
    });

    // Handle profile picture upload
    profileUpload.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
                addActivity('Profile picture updated');
            }
            reader.readAsDataURL(file);
        }
    });

    // Simulate other button actions
    document.getElementById('change-password').addEventListener('click', function() {
        alert('Change password functionality would be implemented here.');
        addActivity('Password changed');
    });

    document.getElementById('change-email').addEventListener('click', function() {
        alert('Change email functionality would be implemented here.');
        addActivity('Email changed');
    });

    document.getElementById('contact-preferences').addEventListener('click', function() {
        alert('Contact preferences functionality would be implemented here.');
        addActivity('Contact preferences updated');
    });

    function addActivity(activity) {
        const activityList = document.getElementById('activity-list');
        const li = document.createElement('li');
        li.textContent = activity + ' - Just now';
        activityList.insertBefore(li, activityList.firstChild);
    }



});
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // Close the menu when clicking outside of it
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnMenuToggle && nav.classList.contains('active')) {
            nav.classList.remove('active');
        }
    });
});