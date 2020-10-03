import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import {Link} from 'react-router-dom';
class App extends Component {
  render(){
    return(
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>Nargiza Boronchieva</strong></span>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    )
  }
}

export default App;
