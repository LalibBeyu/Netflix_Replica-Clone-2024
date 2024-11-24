import React from 'react'
import "./Footer.css"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <div classsName='Footer_outer_container'>
      <div className='Footer_inner_container'>
      <div className='footer_icons'>
        <FacebookRoundedIcon/>
        <InstagramIcon/>
        <YouTubeIcon />
      </div>
      <div className='Footer_data'>
        <div>
          <ul>
            <li>Audio Descriptio</li>
            <li>Investor Relations</li>
            <li>Legal Notice </li>
          </ul>
        </div>
      <div>
        <ul>
          <li>Helper Center</li>
          <li>Jobs</li>
          <li>Cookie Preference</li>
        </ul>
      </div>
      <div>
        <ul>copy_write
          <li>Terms of User</li>
          <li>Corporate Information</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Media Cnter</li>
          <li>Privacy</li>
          <li>Contact Us</li>
        </ul>
        </div>
      </div>
      <div className='service_code'>
      <p>Service Code</p>

      </div>
      <div className='copy_write'>
      &copy;2024 Netflix.Beyu
      </div>
      </div>
      </div>

    
  )
}
