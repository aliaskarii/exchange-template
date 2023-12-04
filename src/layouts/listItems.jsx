import * as React from 'react'
import { Link } from 'wouter'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import PeopleIcon from '@mui/icons-material/People'
import BarChartIcon from '@mui/icons-material/BarChart'
import LayersIcon from '@mui/icons-material/Layers'

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/dashboard">
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard"/>
    </ListItemButton>
    <ListItemButton component={Link} to="/profile">
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
    <ListItemButton component={Link} to="/currentprice">
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Current Price" />
    </ListItemButton>
    <ListItemButton component={Link} to="/about-us">
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="About Us" />
    </ListItemButton>
    <ListItemButton component={Link} to="/chartists">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Chartists" />
    </ListItemButton>
    <ListItemButton component={Link} to="/news">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    <ListItemButton component={Link} to="/chat">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Chat" />
    </ListItemButton>
    <ListItemButton component={Link} to="/learn">
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Learn" />
    </ListItemButton>
  </React.Fragment>
)
export default mainListItems
