import React, { Component } from "react";
import { Grid, Cell } from 'react-mdl';
import Education  from "./education";
import Experience from "./experience";
import Skills from "./skills";


class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="6344.png"
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>

                        <h2 style={{paddingTop: '2em'}}> Thomas Clement </h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <p>
                        It is a long established fact that a reader will be distracted by the readable content 
                        of a page when looking at its layout. The point of using Lorem Ipsum is that it has a 
                        more-or-less normal distribution of letters, as opposed to using 'Content here, 
                        content here', making it look like readable English. Many desktop publishing packages 
                        and web page editors now use Lorem Ipsum as their default model text, and a search for 
                        'lorem ipsum' will uncover many web sites still in their infancy. Various versions have 
                        evolved over the years, sometimes by accident, sometimes on purpose (injected humour and 
                        the like).
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                        <h5>Address</h5>
                        <p> 1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>+1 (703)-980-0313</p>
                        <h5>Web</h5>
                        <p>exampleSite.com</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}></hr>
                    </Cell>

                    <Cell col={8} className="resume-right-col">
                        <h2>Education</h2>
                        
                        <Education 
                            startYear={2017}
                            endYear={2021}
                            schoolName="University of Pennsylvania"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                         <Education 
                            startYear={2014}
                            endYear={2017}
                            schoolName="The Heights School"
                            schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr sytle={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        
                        <Experience
                            startYear = "2022"
                            endYear = 'Current'
                            jobName="Smart Contract Engineer"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />


                        <Experience
                            startYear = "2021"
                            endYear = '2022'
                            jobName="Koinos Blockchain Analyst"
                            jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                        />
                        <hr sytle={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>

                        <Skills
                            skill="Solidity"
                            progress={90}
                        />
                        <Skills
                            skill="TypeScript"
                            progress={70}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={60}
                        />
                        <Skills
                            skill="Python"
                            progress={50}
                        />



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;