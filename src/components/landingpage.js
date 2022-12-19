import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'
//https://www.youtube.com/watch?v=tXVmcNNZrm8&list=PL3KAvm6JMiowqFTXj3oPQkhP7aCgRHFTm&index=3
class Landing extends Component {
    render() {
        return(
            <div style={{width: `100%`, margin: `auto`}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="download.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Solidity Developer</h1>
                        <hr/>

                        <p> Solidity | Java | React | node.js | TS </p>
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://www.linkedin.com/in/tac98/" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-linkedin" aria-hidden="true"/>
                        </a>
                        {/* GitHub */}
                        <a href="https://github.com/tom2o17" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-github" aria-hidden="true"/>
                        </a>
                        {/* Twitter */}
                        <a href="https://twitter.com/toms_twetter" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-twitter" aria-hidden="true"/>
                        </a>
                    </div>
                        </div>
                        <a href="https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/6344">
                        <img 
                        src="6344NoB.png"
                        alt="Penguin"
                        className="avatar-img"
                        />
                        </a>
                        <a href="https://opensea.io/assets/ethereum/0xbd3531da5cf5857e7cfaa92426877b022e612cf8/3609">
                        <img
                        src='3609NoB.png'
                        alt="penguin"
                        className="avatar-img"
                        />
                        </a>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;