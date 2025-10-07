import Final from './assets/FINAL.svg'
import Visibility from "./assets/track.svg"
import Vector  from "./assets/Vector.svg"
import Engagement from "./assets/Engagements.svg"
import Timeline from "./assets/timelines.svg"
import Notification from "./assets/notification.svg"
import Archive from  "./assets/filearchive.svg"
import Works from "./assets/upload01.svg"
import Sharebynd from "./assets/share02.svg"
import Trackview from "./assets/track03.svg"
import Arrow from "./assets/arrow.png"
import Review from "./assets/qoutes.svg"
import Profile from "./assets/Profiles.svg"
import Correct from "./assets/corrects.svg"
import Button from "./component/button.jsx"
import Faaq from "./FAQ/faaq"
import Footer from "./footer/footer.jsx"
import Bynd from "./assets/byndlogo.svg"
import './App.css'
import { useState, useEffect } from 'react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav-container')) {
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
  <div>
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='nav-logo'>
          <img src={Bynd} alt='BYND' />
        </div>
        
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id='nav-menu'>
          <ul className='nav-links'>
            <li><a href='#features' onClick={closeMenu}>Features</a></li>
            <li><a href='#how-it-works' onClick={closeMenu}>How it works</a></li>
            <li><a href='#faqs' onClick={closeMenu}>FAQs</a></li>
            <li><a href='#pricing' onClick={closeMenu}>Pricing</a></li>
            <li><a href='#contact' onClick={closeMenu}>Contact</a></li>
          </ul>
        </div>
        
        <div className={`nav-actions ${isMenuOpen ? 'active' : ''}`}>
          <a href='#login' className='nav-login' onClick={closeMenu}>Login</a>
          <button className='nav-cta-button' onClick={closeMenu}>Start tracking for free</button>
        </div>
        
        <div 
          className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} 
          id='nav-toggle' 
          onClick={toggleMenu}
          role="button"
          tabIndex="0"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMenu();
            }
          }}
        >
          <span className='bar'></span>
          <span className='bar'></span>
          <span className='bar'></span>
        </div>
      </div>
    </nav>
 <div className='mainpage'>
   <div className='hero-section'>
     <div className='hero-content'>
       <h1 className='hero-title'>
         Know when your<br></br> <span className='highlight'>design</span> gets noticed
       </h1>
       <p className='hero-subtitle'>
         Track views, time spent, and recruiter engagement on every design assignment you send — so you never submit blind again.
       </p>
       <button className='hero-cta-button'>
         Start tracking for free
       </button>
     </div>
     <div className='dashboard-section'>
     <img className='dashboard-image' src={Final} alt='BYND Dashboard' />
   </div>
   </div>
 </div>
<div className='features-section'>
  <div className='features-container'>
    <div className='features-header'>
      <h2 className='features-title'>
        Everything you <span className='highlight'>need</span>
      </h2>
      <p className='features-subtitle'>
        Track views, gain insights, and stay in control — effortlessly.
      </p>
    </div>
    
    <div className='features-grid'>
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Visibility} alt='Track Views' />
        </div>
        <h3 className='feature-title'>Track Views</h3>
        <p className='feature-description'>
          Get real-time updates on whether your assignment has been viewed — and when.
        </p>
      </div>
      
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Vector} alt='View Insights' />
        </div>
        <h3 className='feature-title'>View Insights</h3>
        <p className='feature-description'>
          Track how much time recruiters spend on your submission and how often they return.
        </p>
      </div>
      
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Engagement} alt='Engagement Score' />
        </div>
        <h3 className='feature-title'>Engagement Score</h3>
        <p className='feature-description'>
          We calculate an engagement score so you know which companies are truly interested.
        </p>
      </div>
      
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Timeline} alt='Timeline View' />
        </div>
        <h3 className='feature-title'>Timeline View</h3>
        <p className='feature-description'>
          A simple graph showing how recruiters engaged with your assignment over time.
        </p>
      </div>
      
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Notification} alt='Real-time Notifications' />
        </div>
        <h3 className='feature-title'>Real-time Notifications</h3>
        <p className='feature-description'>
          Get email and in-app notifications when your work is viewed — no more guessing.
        </p>
      </div>
      
      <div className='feature-card'>
        <div className='feature-icon'>
          <img src={Archive} alt='Assignment Archive' />
        </div>
        <h3 className='feature-title'>Assignment Archive</h3>
        <p className='feature-description'>
          Keep all your design assignments organized, secure, and easily accessible in one place.
        </p>
      </div>
    </div>
  </div>
</div>
<div className='how-it-works-section'>
  <div className='how-it-works-container'>
    <div className='how-it-works-header'>
      <h2 className='how-it-works-title'>
        How it <span className='highlight'>works</span>
      </h2>
      <p className='how-it-works-subtitle'>
        Just 3 easy steps to track your design assignments
      </p>
    </div>
    
    <div className='steps-grid'>
      <div className='step-card'>
        <div className='step-number'>01</div>
        <h3 className='step-title'>UPLOAD YOUR ASSIGNMENT</h3>
        <p className='step-description'>
          Just paste your Figma, PDF, or assignment link—simple, fast, and secure sharing.
        </p>
        <div className='step-illustration'>
          <img src={Works} alt='Upload Assignment' />
        </div>
      </div>
      
      <div className='step-card'>
        <div className='step-number'>02</div>
        <h3 className='step-title'>SHARE BYND LINK</h3>
        <p className='step-description'>
          Your BYND link is unique, secure, and view-tracked. Just copy and share it with the recruiter.
        </p>
        <div className='step-illustration'>
          <img src={Sharebynd} alt='Share BYND Link' />
        </div>
      </div>
      
      <div className='step-card'>
        <div className='step-number'>03</div>
        <h3 className='step-title'>TRACK VIEWS  INSTANTLY</h3>
        <p className='step-description'>
          See if your assignment was viewed, when it was opened, and how many times—all from your BYND Dashboard.
        </p>
        <div className='step-illustration'>
          <img src={Trackview} alt='Track Views' />
        </div>
      </div>
    </div>
    
    <div className='how-it-works-cta'>
      <button className='how-it-works-button'>
        Start tracking for free <img src={Arrow} alt='Arrow' />
      </button>
    </div>
  </div>
</div>
<div className='testimonials-section'>
  <div className='testimonials-container'>
    <div className='testimonials-header'>
      <h2 className='testimonials-title'>
        What they <span className='highlight'>say</span>
      </h2>
      <p className='testimonials-subtitle'>
        Early praise from the Design Community
      </p>
    </div>
    
    <div className='testimonials-grid'>
      <div className='testimonial-card'>
        <div className='quote-icon'>
          <img src={Review} alt='Quote' />
        </div>
        <p className='testimonial-text'>
          "I can see which of my assignments were opened thanks to The BYND which in turn helps me in following up with the recruiting team."
        </p>
        <div className='testimonial-author'>
          <div className='author-avatar'>
            <img src={Profile} alt='Hitesh Yadav' />
          </div>
          <div className='author-info'>
            <h5 className='author-name'>Hitesh Yadav</h5>
            <p className='author-title'>Product Design Intern</p>
          </div>
        </div>
      </div>
      
      <div className='testimonial-card'>
        <div className='quote-icon'>
          <img src={Review} alt='Quote' />
        </div>
        <p className='testimonial-text'>
          "It's so discouraging to spend hours on a design assignment and then just hear nothing. With The BYND, at least I could track if someone checked my work."
        </p>
        <div className='testimonial-author'>
          <div className='author-avatar'>
            <img src={Profile} alt='Vandana Trivedi' />
          </div>
          <div className='author-info'>
            <h5 className='author-name'>Vandana Trivedi</h5>
            <p className='author-title'>Associate UI UX Designer</p>
          </div>
        </div>
      </div>
      
      <div className='testimonial-card'>
        <div className='quote-icon'>
          <img src={Review} alt='Quote' />
        </div>
        <p className='testimonial-text'>
          "With 1000s of designers applying, knowing exactly when your work is viewed is crucial. The BYND shows me when my assignment is opened—and it truly makes a difference."
        </p>
        <div className='testimonial-author'>
          <div className='author-avatar'>
            <img src={Profile} alt='Harrison Ray' />
          </div>
          <div className='author-info'>
            <h5 className='author-name'>Harrison Ray</h5>
            <p className='author-title'>Freelance Designer transitioning to full-time</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className='pricing-section'>
  <div className='pricing-container'>
    <div className='pricing-header'>
      <h2 className='pricing-title'>
        Choose the <span className='highlight'>plan</span> that's right for you
      </h2>
    </div>
    
    <div className='pricing-grid'>
      <div className='pricing-card free-tier'>
        <div className='pricing-card-header'>
          <h3 className='plan-name'>Free Tier</h3>
          <div className='plan-price'>
            <span className='price-amount'>$0</span>
            <span className='price-period'>per month</span>
          </div>
        </div>
        <div className='plan-features'>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='assignment-text'>3 Assignment Submissions</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>View Status (Viewed / Not Viewed)</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Secure Link Sharing</span>
          </div>
        </div>
      </div>
      
      <div className='pricing-card pro-tier'>
        <div className='best-value-badge'>Best value</div>
        <div className='pricing-card-header'>
          <h3 className='plan-name'>Pro Tier</h3>
          <div className='plan-price'>
            <span className='price-amount'>$12</span>
            <span className='price-period'>per month</span>
          </div>
        </div>
        <div className='plan-features'>
          <div className='feature-item'>
            <span className='feature-text'>Everything in Free, Plus</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span  className='feature-text'>Unlimited submissions</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Instant notifications when design is viewed</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>First & last viewed timestamps</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Assignment metrics dashboard</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Engagement score</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Views over time (Graph)</span>
          </div>
          <div className='feature-item'>
            <img src={Correct} alt='Check' className='feature-icon' />
            <span className='feature-text'>Smart tracking links</span>
          </div>
          <div className='feature-item'>
            <span className='feature-textss'>No credit card required</span>
          </div>
        </div>
      </div>
    </div>
    <div className='pricing-footer'>
      <p className='billing-info'>Billed monthly. Cancel anytime.</p>
      <button className='pricing-cta-button'>
        Start tracking for free <img src={Arrow} alt='Arrow' />
      </button>
    </div>
  </div>
</div>
<Faaq />
<Footer /> 
</div>
  )
}
export default App



