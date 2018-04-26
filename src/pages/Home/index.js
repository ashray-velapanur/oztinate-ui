import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import FontAwesome from 'react-fontawesome';
import Background from './assets/landing-background.jpg'

import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';


class Feature extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: this.props.backgroundColor, width: '280px', height: '320px', marginBottom: '24px', borderRadius: '16px'}}>
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0 8% 0 8%'}}>
          <div style={{height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0, 0, 0, 0.8)'}}>
            <FontAwesome name={this.props.image} size='5x'/>
          </div>
          <Typography variant='title' align='center'  gutterBottom>{this.props.title}</Typography>
          <Typography variant='body1' align='center'  gutterBottom>{this.props.description}</Typography>
        </div>
      </div>
    )
  }
}

function DownloadSection() {
    return (
      <div>
        <Typography variant='subheading' align='center' gutterBottom>Oztinate is available on iOS and Android. Get it here!</Typography>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <FontAwesome name='apple' size='3x' style={{padding: '12px', color: 'rgba(0, 0, 0, 0.8)'}}/>
          <FontAwesome name='android' size='3x' style={{padding: '12px', color: 'rgba(0, 0, 0, 0.8)'}}/>
        </div>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Button variant='raised' color='primary' style={{width: '200px', height: '60px', marginTop: '24px'}}>Download</Button>
        </div>
      </div>
    );
}


function ContactSection() {
    return (
      <div>
        <div>
          <Typography variant='headline' align='center' gutterBottom>Got Questions?</Typography>
          <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Drop us a line and we will get back to you!</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '60px 0 0 0'}}>
          <TextField
            label='Email'
            margin='normal'
            style={{width: '60%'}}
            />
          <TextField
            label='Message'
            margin='normal'
            multiline
            rows='4'
            style={{width: '60%'}}
            />
            <Button variant='raised' color='primary' style={{width: '200px', height: '60px', marginTop: '24px'}}>Send</Button>
        </div>
      </div>
    );
}

function Navbar() {
    return (
      <div>
        <AppBar position='static' color='primary' style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
          <Toolbar>
            <Button color="inherit" href='#features-section'>Features</Button>
            <Button color="inherit" href='#download-section'>Download</Button>
            <Button color="inherit" href='#contact-section'>Contact</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
}

function Footer() {
    return (
      <div style={{backgroundColor: '#f2f2f2', borderBottom: '1px solid #f2f2f2', display: 'flex', justifyContent: 'center'}}>
        <div style={{padding: '10% 0 10% 0', width: '1000px', display: 'flex', flexWrap: 'wrap', flexDirection: 'column', marginLeft: '20px', marginRight: '20px'}}>
        </div>
      </div>
    );
}

const sectionWrapper = (Content) => (props) => (
  <div className='section-container-outer' id={props.id} style={props.style}>
    <div className='section-container-inner'>
      <Content {...props} />
    </div>
  </div>
)

function LandingSection() {
  return (
    <div className='landing-section-background'>
      <Navbar />
      <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', margin: '140px 48px 140px 48px'}}>
        <Typography variant='headline' align='center' style={{color: '#ffffff'}} gutterBottom>Oztinate</Typography>
        <Typography variant='title' align='center' style={{color: '#ffffff'}} gutterBottom>App for practicing musicians.</Typography>
      </div>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div>
      <div>
        <Typography variant='headline' align='center' gutterBottom>How it works</Typography>
        <Typography variant='subheading' align='center' color='textSecondary' gutterBottom>Record random samples of your practice sessions. Time your practice and reach your 10000 practice hours mark. Have your friends and teacher listen to your practice and talk about it.</Typography>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '60px 0 0 0'}}>
        <Feature image='hourglass' title={'Time your Practice'} backgroundColor='#fafafa' description={'Keep records of what you play on your instrument and how long you play it.'} />
        <Feature image='share' title={'Share your Progress'} backgroundColor='#fafafa' description={'Share samples of what you just practiced with a teacher or a friend.'} />
        <Feature image='bolt' title={'Find Inspiration'} backgroundColor='#fafafa' description={'Listen to other users practice and find your next favourite riff, melody or chord progression.'} />
      </div>
    </div>
  )
}

const WrappedLandingSection = sectionWrapper(LandingSection);
const WrappedFeaturesSection = sectionWrapper(FeaturesSection);
const WrappedDownloadSection = sectionWrapper(DownloadSection);
const WrappedContactSection = sectionWrapper(ContactSection);

function Home() {
  return (
    <div>
      <LandingSection />
      <WrappedFeaturesSection id='features-section' style={{backgroundColor: '#fff'}}/>
      <WrappedDownloadSection id='download-section' style={{backgroundColor: '#fafafa'}}/>
      <WrappedContactSection id='contact-section' style={{backgroundColor: '#fff'}}/>
      <Footer />
    </div>
  );
}


export default Home;
