import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { CardText } from "react-mdl";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center / cover'}}> React Project #1</CardTitle>
                    <CardText>
                    Ela é vítima de um crime de Estado pouco conhecido dos brasileiros: o sequestro de bebês e crianças filhos de militantes que faziam oposição ao regime militar nas décadas de 1960, 1970 e 1980.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 1) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://www.clipartkey.com/mpngs/m/197-1972428_angularjs-angular-js-icon-png.png) center / cover'}}> Angular JS Project #1</CardTitle>
                    <CardText>
                    Ela é vítima de um crime de Estado pouco conhecido dos brasileiros: o sequestro de bebês e crianças filhos de militantes que faziam oposição ao regime militar nas décadas de 1960, 1970 e 1980.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 2) {
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://gccontent.blob.core.windows.net/gccontent/blogs/legacy/wijmo/2016/10/vuejs-logo.jpg) center / cover'}}> Vue js Project #1</CardTitle>
                    <CardText>
                    Ela é vítima de um crime de Estado pouco conhecido dos brasileiros: o sequestro de bebês e crianças filhos de militantes que faziam oposição ao regime militar nas décadas de 1960, 1970 e 1980.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
            )
        } else if (this.state.activeTab === 3) {
            // Example of how to return multiple cards on a webpage
            return(
                <div className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Mi83nQu9qdPUozHEodVGeu936klDJqJG3MiwDfqiWgI7G7hn0P-SRBhjVWUGzlk5Ca4&usqp=CAU) center / cover'}}> Mango DB Project</CardTitle>
                    <CardText>
                    Ela é vítima de um crime de Estado pouco conhecido dos brasileiros: o sequestro de bebês e crianças filhos de militantes que faziam oposição ao regime militar nas décadas de 1960, 1970 e 1980.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: 'black', height: '176px', background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Mi83nQu9qdPUozHEodVGeu936klDJqJG3MiwDfqiWgI7G7hn0P-SRBhjVWUGzlk5Ca4&usqp=CAU) center / cover'}}> Mango DB Project</CardTitle>
                    <CardText>
                    Ela é vítima de um crime de Estado pouco conhecido dos brasileiros: o sequestro de bebês e crianças filhos de militantes que faziam oposição ao regime militar nas décadas de 1960, 1970 e 1980.
                    </CardText>
                    <CardActions border>
                        <Button colored>GitHub</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share"/>
                    </CardMenu>
                </Card>
                </div>              
            )
        }
    }


    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab> 
                    <Tab>Angular</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>
               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
               
            </div>
        )
    }
}

export default Projects;