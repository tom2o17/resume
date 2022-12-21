import './App.css';
import {Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return(
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}}
            to="/">Thomas Clement </Link>} scroll>
              <Navigation>
                  <Link to="/resume">Resume</Link>
                  <Link to="/aboutme">Contracts</Link>
                  {/* <Link to="/projects">Projects</Link> */}
                  {/* <Link to="/contact">Contact Me</Link> */}
              </Navigation>
          </Header>
          <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}}
            to="/"> Portfolio </Link>}>
              <Navigation>
                  <Link to="/resume"> 📑  Resume</Link>
                  <Link to="/aboutme"><i class="fa-solid fa-file-contract"></i> Smart Contracts</Link>
                  {/* <Link to="/projects">Projects</Link> */}
                  {/* <Link to="/contact">Contact Me</Link> */}
                        <a href="https://github.com/tom2o17" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-github" aria-hidden="true"/> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/tac98/" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-linkedin" aria-hidden="true"/> LinkedIn
                        </a>

                        <a href="https://twitter.com/toms_twetter" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-twitter" aria-hidden="true"/> Twitter
                        </a>
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
