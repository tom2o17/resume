import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Education  from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
    render() {
        return(
            <div className="resume" style={{paddingTop: `50px`}}>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="3609NoB.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}> Thomas Clement </h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>
                        I can cook Bear Pasta, Bear Tacos and Soup Dumplings from Trader Joes. 
                        I can usually be found leaving water bottles all over my apartment, 
                        playing game game in my underwear or ripping bongs on my porch. Finally, 
                        I have to sleep with a stuffed animal - usually I'm rotating between my Shiba Inus, 
                        Sushi Cats or a Snorlax. My girlfriend is the prettiest girlfriend in the whole world, 
                        but sometimes I call her a thot. She gets mad at me when I lose my vape in the couch and 
                        I have to pull out all the couch cushions. I am not in desperate hours. 
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
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

                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        
                        <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName="University of Pennsylvania"
                            schoolDescription="Bachelor of Arts, Economics with Pre-Medical Coursework 	Graduation: May 17, 2021"
                        />
                         <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="The Heights School"
                            schoolDescription="SAT: 1460/1600 ACT: 33"
                        />
                        <hr sytle={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        
                        <Experience
                            startYear = "2022"
                            endYear = 'Current'
                            jobName="Smart Contract Engineer"
                            organization="Ondo Finance"
                            organizationLink = "https://ondo.finance/"
                            jobDescription=""
                        />


                        <Experience
                            startYear = "2021"
                            endYear = '2022'
                            organization = "Koinos"
                            organizationLink = "https://koinos.io/"
                            jobName="Blockchain Analyst"
                            jobDescription=""
                        />
                        <hr sytle={{borderTop: '3px solid #e22947'}} />

                        <h2>Public Work</h2>

                        {/* <Skills
                            skill="Solidity"
                            progress={90}
                        />
                        <Skills
                            skill="TypeScript"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={65}
                        />
                        <Skills
                            skill="Python"
                            progress={60}
                        /> */}
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;