import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import logo from  '../assets/elaflogo.png';
import first from  '../assets/ai1.jpg';
import second from  '../assets/ai2.jpg';
import third from  '../assets/ai3.jpg';
import fourth from  '../assets/ai4.jpg';
import menu from  '../assets/menu.png';
import Carousel from 'react-material-ui-carousel'
import  '../App.css';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GroupsIcon from '@mui/icons-material/Groups';
import FlipIcon from '@mui/icons-material/Flip';
import GridViewIcon from '@mui/icons-material/GridView';
import i18n from 'i18next';
import trans  from './trans';
import { FormControl } from '@mui/base/FormControl';
import TextField from '@mui/material/TextField';
import { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Form,
} from "react-router-dom";
i18n.language=='en'?require('../App.css'):require('../App-ar.css');
class Contact  extends React.Component {  

  constructor(props) {
    super(props);
    this.state={
      menu : "sidenav",
      content : "content",
      lang :  i18n.language || window.localStorage.i18nextLng,
      name : "",
      email : "",
      mobile: "",
      msg: ""
    }

    this.openNav =this.openNav.bind(this);
    this.closeNav =this.closeNav.bind(this);

  }
  
   openNav() {
    if(this.state.menu =="sidenav"){
    this.setState({
      menu : "sidenav sidenavopen",
      content : "content content2"
    })
  }else{
    this.setState({
      menu : "sidenav",
      content : "content"
    })
  }
  }
  closeNav() {
    this.setState({
      menu : "sidenav",
      content : "content"
    })
  }
render(){

  return(
    <Box lg={{ flexGrow: 1 }}>



    <div className={this.state.menu}>
    
      <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
      <a href="/">{i18n.t('home')}</a>
  <a href="/#courses">{i18n.t('ourcourses')}</a>
  <a href="/#kinder">{i18n.t('kinder')}</a>
  <a href="/#about">{i18n.t('about')}</a>
  <a href="/#cert">{i18n.t('certificates')}</a>
  <a href="/contact">{i18n.t('contact')}</a>
      <div className='soc2'>
    
      <a className='pad' href='https://www.facebook.com/profile.php?id=61556919623427'>
      <FacebookIcon /></a>
      <a className='pad' href='https://www.instagram.com/elaf_academy?igsh=MWpzZXczZHE2NjQ1YQ%3D%3D'>
        <InstagramIcon />
        </a>
        <a className='pad' href='https://www.youtube.com/@elaf_international_academy'>
    
        <YouTubeIcon />
    </a>
    <a className='pad' href='https://x.com/EssamNashaat73?s=07'>
    
        <XIcon />
    </a>
    <a className='pad' href='https://www.linkedin.com/in/essam-nashaat-9a854b1b5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR3ikPSIB26zkG-EBC0-baQDgQRqNG9uq7lcWvu9W2kXhglaIC2eC_FwPZA'>
    
        <LinkedInIcon />
        
      </a>
      <br />
      <a className='pad' href='https://teams.live.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fcommunity%2FFEA--OEo4t7GrvsXSs&type=community&deeplinkId=1b0d1cbb-531c-4b8d-bcf3-4368a62df1fe&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true'>
    
        <GroupsIcon />
        
      </a>
      <a className='pad' href='https://flip.com/82dd414e?fbclid=IwAR12sqb2wbb7ZlMIpfSeVb7wRsyMTTLO_QlBYqXP-R6aHT_qpxSrqiXeQxg'>
    
    <FlipIcon />
    
    </a>
    <a className='pad' href='https://wakelet.com/wake/G8g1iRgPct4gnDYzpyrsO?fbclid=IwAR3YSGs9KevAyXT6-KXtyjjImFwUgDEPYXQi0ycy-fiWjXoVrRNO3gSMcEY'>
    
    <GridViewIcon />
    
    </a>
      </div>
    </div>
    
    
          <Grid  className={this.state.content} container>
          <img src={menu} className='menu' onClick={this.openNav}/>
          <Grid className='none' item xs={0} md={4}>
    
              <div><ul>
              <li>          <a href="/">{i18n.t('home')}</a>
    </li>
              <li>  <a href="/#courses">{i18n.t('ourcourses')}</a>
    </li>
              <li>  <a href="/#kinder">{i18n.t('kinder')}</a>
    </li>
                </ul></div>
            </Grid>
            <Grid item xs={12} lg={4}
             className='center logocenter'
            >
            <img className='logo' src={logo} />
            </Grid>
            <Grid className='none' item xs={0} md={4}>
            <div><ul>
            <li className='ul2'>        <a href="/#about">{i18n.t('about')}</a>
    </li>
    <li className='ul2'>  <a href="/#cert">{i18n.t('certificates')}</a>
    </li>
    <li className='ul2'>  <a href="/#contact">{i18n.t('contact')}</a>
    </li>
    
      </ul>
    
      </div>
    
            </Grid>
          
              <a  onClick={() =>{
                if(this.state.lang=='ar'){
                  this.changeLanguage('en');
                }else{
                  this.changeLanguage('ar');
    
                }
    
              }}><img src={this.state.lang=='ar'?require('../assets/usa.png'):require('../assets/eg.png')} className='flag' /></a>
          <Grid container>
    <Grid lg={4}>
<img className='full' src={require('../assets/contact.jpg')} />
</Grid>
     <Grid className='center' lg={8}>
     <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3435.597104790109!2d31.013552!3d30.5606852!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDMzJzM4LjUiTiAzMcKwMDAnNDguOCJF!5e0!3m2!1sar!2seg!4v1717695730832!5m2!1sar!2seg" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     <p>شبين الكوم البر الشرقي ش السبكي أمام مدرسة الزراعة
</p>
<a className='center' href='tel:+201070232310'>اتصل بنا</a>
     </Grid>

            </Grid>
            </Grid>
            <Grid className='footer'  container>
<Grid item xs={4} className='center'>
  <h4 className='center white'>! Follow Us on Social Media Channels 
</h4>

<a className='pad' href='https://www.facebook.com/profile.php?id=61556919623427'>
  <FacebookIcon /></a>
  <a className='pad' href='https://www.instagram.com/elaf_academy?igsh=MWpzZXczZHE2NjQ1YQ%3D%3D'>
    <InstagramIcon />
    </a>
    <a className='pad' href='https://www.youtube.com/@elaf_international_academy'>

    <YouTubeIcon />
</a>
<a className='pad' href='https://x.com/EssamNashaat73?s=07'>

    <XIcon />
</a>
<a className='pad' href='https://www.linkedin.com/in/essam-nashaat-9a854b1b5/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR3ikPSIB26zkG-EBC0-baQDgQRqNG9uq7lcWvu9W2kXhglaIC2eC_FwPZA'>

    <LinkedInIcon />
    
  </a>
  <br />
  <a className='pad' href='https://teams.live.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fcommunity%2FFEA--OEo4t7GrvsXSs&type=community&deeplinkId=1b0d1cbb-531c-4b8d-bcf3-4368a62df1fe&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true'>

    <GroupsIcon />
    
  </a>
  <a className='pad' href='https://flip.com/82dd414e?fbclid=IwAR12sqb2wbb7ZlMIpfSeVb7wRsyMTTLO_QlBYqXP-R6aHT_qpxSrqiXeQxg'>

<FlipIcon />

</a>
<a className='pad' href='https://wakelet.com/wake/G8g1iRgPct4gnDYzpyrsO?fbclid=IwAR3YSGs9KevAyXT6-KXtyjjImFwUgDEPYXQi0ycy-fiWjXoVrRNO3gSMcEY'>

<GridViewIcon />

</a>
  </Grid>

  <Grid className='padtop' item xs={4}>
  <a className='lnk' href="/">{i18n.t('home')}</a>
  <a className='lnk' href="/#courses">{i18n.t('ourcourses')}</a>
  <a className='lnk' href="/#kinder">{i18n.t('kinder')}</a>
  <a className='lnk' href="/#about">{i18n.t('about')}</a>
  <a className='lnk' href="/#cert">{i18n.t('certificates')}</a>
  <Link  className='lnk' to="/contact">{i18n.t('contact')}</Link>
  </Grid>
  <Grid item xs={4}>
  <img className='full' src={require('../assets/elaflogo.png')} />
  <b><p className='align pad'>Elaf Academy is interactive educational environment based on self-learning, blended e-learning, and developing creativity, innovation, programming, language, and robotics skills.
</p></b>
  </Grid>
  </Grid>
  <a href='https://wa.me/+201070232310'><img src={require('../assets/whats.png')} className='whats' /></a>

              </Box>
  );
}
}
export default Contact
