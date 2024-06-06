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
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
i18n.language=='en'?require('../App.css'):require('../App-ar.css');

class Home  extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      menu : "sidenav",
      content : "content",
      lang :  i18n.language || window.localStorage.i18nextLng
    }
    this.openNav =this.openNav.bind(this);
    this.closeNav =this.closeNav.bind(this);

  }
   changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    this.setState({
      lang : lng
    })
  };
 
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
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */

   Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

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
          <li>          <a href="#">{i18n.t('home')}</a>
</li>
          <li>  <a href="#">{i18n.t('ourcourses')}</a>
</li>
          <li>  <a href="#">{i18n.t('kinder')}</a>
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
        <li className='ul2'>        <a href="#">{i18n.t('about')}</a>
</li>
<li className='ul2'>  <a href="#">{i18n.t('certificates')}</a>
</li>
<li className='ul2'>  <a href="/contact">{i18n.t('contact')}</a>
</li>

  </ul>

  </div>

        </Grid>
      
          <button  onClick={() =>{
            if(this.state.lang=='ar'){
              this.changeLanguage('en');
            }else{
              this.changeLanguage('ar');

            }

          }}><img src={this.state.lang=='ar'?require('../assets/usa.png'):require('../assets/eg.png')} className='flag' /></button>
        <Grid item xs={12}>

        <Carousel>
        <div><img className="sld" src={first} /></div>
        <div><img className="sld" src={second} /></div>
        <div><img className="sld" src={third} /></div>
        <div><img className="sld" src={fourth} /></div>

        </Carousel>
        <Grid id='about'  item xs={12}>
          <h1 align='center'>What is Elaf Academy</h1>

          <p className='align'>An interactive educational environment based on self-learning, blended e-learning, and developing creativity, innovation, programming, language, and robotics skills.
</p>
<Grid  container>

<Grid  className='pad' item xs={4}>
  <img className='full' src={require('../assets/AI-course1.jpg')} />
  </Grid>
  <Grid className='pad' item xs={4}>
  <img className='full' src={require('../assets/AI-course2.jpg')} />
  </Grid>
  <Grid className='pad' item xs={4}>
  <img className='full' src={require('../assets/AI-course3.jpg')} />
  </Grid>
  </Grid>

</Grid>
        </Grid>
        <Grid  id='courses' item xs={12}>
          <h1 align='center'>Our Courses</h1>

          <p className='align'>We Offer Collection of Courses such as Artificial Intelligence, Simulation, Virtual Reality, Augmented Reality, 
          Virtual Classrooms, Gamification, Interactive Learning, Quizzes, Robot, Blended Learning, Book Creator

           
</p>
<Grid  container>

<Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/AI.jpg')} />
  <h4 className='center'>Artificial Intelligence</h4>
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/VR.jpg')} />
  <h4 className='center'>Virtual Reality</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/AR.jpg')} />
  <h4 className='center'>Augmented Reality</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/VCR.jpg')} />
  <h4 className='center'>Virtual Classrooms</h4>
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/GM.jpeg')} />
  <h4 className='center'>Gamification</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/INTL.jpg')} />
  <h4 className='center'>Interactive Learning</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/Quizz.jpg')} />
  <h4 className='center'>Quizzes</h4>
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/Robot.jpg')} />
  <h4 className='center'>Robot</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/BlendedLearning.jpg')} />
  <h4 className='center'>Blended Learning</h4>

  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/BC.jpg')} />
  <h4 className='center'>Book Creator</h4>

  </Grid>
  <Grid className='pad center' item lg={12} md={12} xs={12}>
  <img className='stm' src={require('../assets/Stem.jpg')} />
  <p className='center'>The Academy and its Instructors are certified from  STEM </p>

</Grid>
  </Grid>

</Grid>
<Grid  container>
<Grid id='kinder' className='pad' item lg={12} md={12} xs={12}>

<h1 className='center'>Kindergarden</h1>
<p className='center'>Our Academy offer Kindergarden to help kids grow and improve their skills and have fun.
</p>
</Grid>
<Grid className='pad center' item lg={12}>
<img className='stm' src={require('../assets/kinder.jpg')} />

</Grid>
</Grid>

<Grid  container>
<Grid  id='cert' className='pad' item lg={12} md={12} xs={12}>

<h1 className='center'>Our Instructors Certificates</h1>
<Grid  container>

<Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert1.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert2.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert3.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert4.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert5.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert6.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert7.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert8.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert9.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert10.jpg')} />
  </Grid>
  <Grid className='pad' item lg={4} md={12} xs={12}>
  <img className='full2' src={require('../assets/cert11.jpg')} />
  </Grid>
  </Grid>

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
  <a  className='lnk' href="/contact">{i18n.t('contact')}</a>
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
export default Home;
