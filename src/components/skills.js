import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';


class Skills extends Component{
    render() {
        return(
            <Grid col={12}>
                <div style={{display: 'flex'}}>{this.props.skill }
                    <ProgressBar style={{margin: '10px' , width: '1npx', padding: '1px'}}
                    progress={this.props.progress}
                />
                </div>
            </Grid>
        )
    }
}

export default Skills;