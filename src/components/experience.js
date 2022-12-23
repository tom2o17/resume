import React, { Component } from 'react';
import { Grid, Cell, FABButton, Icon } from 'react-mdl';
import { Link } from 'react-router-dom';



class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4} style={{margin:"auto"}}>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                    <a href={this.props.organizationLink} rel="nooopener noreferrer" target="_blank">
                            Visit {this.props.organization}
                    </a>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.organization}</p>
                    <p>{this.props.jobDescription}</p>
                    
                </Cell>
            </Grid>
        )
    }
}

export default Experience