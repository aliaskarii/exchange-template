import React from 'react'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Link from '@mui/material/Link'
import homeicon from '../assets/images/home-2.png'
import usericon from '../assets/images/user.png'
import coinicon from '../assets/images/coin.png'
import infocircleicon from '../assets/images/info-circle.png'
import chartcandleicon from '../assets/images/chart-candle.png'
import templateicon from '../assets/images/template.png'
import messageicon from '../assets/images/message-report.png'
import licenceicon from '../assets/images/license.png'
import logouticon from '../assets/images/arrow-bar-left.png'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <img src={homeicon} alt="home" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <img src={usericon} alt="user" />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/currentprice">
      <ListItemIcon>
        <img src={coinicon} alt="coin" />
      </ListItemIcon>
      <ListItemText primary="Current Price" />
    </ListItemButton>
    <ListItemButton component={Link} to="/about-us">
      <ListItemIcon>
        <img src={infocircleicon} alt="info" />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItemButton>
    <ListItemButton component={Link} to="/chartists">
      <ListItemIcon>
        <img src={chartcandleicon} alt="chartists" />
      </ListItemIcon>
      <ListItemText primary="Chartists" />
    </ListItemButton>
    <ListItemButton component={Link} to="/news">
      <ListItemIcon>
        <img src={templateicon} alt="news" />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    <ListItemButton component={Link} to="/chat">
      <ListItemIcon>
        <img src={messageicon} alt="chat" />
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItemButton>
    <ListItemButton component={Link} to="/learn">
      <ListItemIcon>
        <img src={licenceicon} alt="learn" />
      </ListItemIcon>
      <ListItemText primary="Learn" />
    </ListItemButton>
    <ListItemButton className="mt-20" component={Link} to="/logout">
      <ListItemIcon>
        <img src={logouticon} alt="logout" />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
)
export default mainListItems
