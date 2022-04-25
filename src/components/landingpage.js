import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl'

class Landing extends Component {
    render() {
        return(
            <div style={{width: `100%`, margin: `auto`}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                        src="https://media-exp1.licdn.com/dms/image/C4E03AQH8rfHXTjbBLA/profile-displayphoto-shrink_800_800/0/1609194830288?e=1656547200&v=beta&t=o17j2vQzIKvfqLFWDcU_QpC0xRDWy6YPIdhTVdcQUvY"
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Solidity Smart Contract Developer</h1>

                        <hr/>

                        <p> Solidity | Java | React | node.js | TS </p>
                    <div className="social-links">
                        {/* LinkedIn */}
                        <a href="https://google.com" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-linkedin" aria-hidden="true"/>
                        </a>
                        {/* GitHub */}
                        <a href="https://google.com" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-github" aria-hidden="true"/>
                        </a>
                        {/* Twitter */}
                        <a href="https://google.com" rel="nooopener noreferrer" target="_blank">
                            <i class="fa-brands fa-twitter" aria-hidden="true"/>
                        </a>

                    </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;