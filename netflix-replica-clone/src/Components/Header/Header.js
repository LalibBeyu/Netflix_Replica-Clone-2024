import React from 'react'
import "./header.css"
import Netflix_logo from "../../assets/Images/netflix-logo2.png";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
export const Header = () => {
  return (
    <div className='header_outer_container'>
        <div className='header_container'>
            <div className='header_left'>
                <ul>
                    <li><img src={Netflix_logo} width="90" height="40"/></li>
                    <li>Home</li>
                    <li>TvShows</li>
                    <li>Movies</li>
                    <li>Latest</li>
                    <li>MyLists</li>
                    <li>Browse by Language</li>
                </ul>

            </div>
            <div className='header_right'>
                <ul>
                    <li><SearchIcon/></li>
                    <li><NotificationsNoneIcon /></li>
                    <li><AccountBoxIcon /></li>
                    <li><ArrowDropDownCircleIcon /></li>
                </ul>

            </div>

        </div>
        
    </div>
  )
}
