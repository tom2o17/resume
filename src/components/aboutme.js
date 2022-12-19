import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { CardText } from "react-mdl";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="landing-grid">
                <h1 style={{textAlign: 'center', color: `#f205b7`, paddingTop: `30px`}}>
                    Deployed Contracts
                </h1>
            <table className="contracts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Total Value Secured</th>
            <th>Chain</th>
            <th>Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>OndoCoinlistDistributor</td>
            <td>Token Distribution Thought <br></br> merkle root cryptography</td>
            <td>10M$</td>
            <th>Ethereum Mainnet</th>
            <td>
                <a href="https://etherscan.io/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target='_blank'>
                <Button style={{color: `#f205b7`}}>Etherscan</Button>
                </a>
            </td>
            <td>
                <a href="https://etherscan.deth.net/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td>
          </tr>
          <tr>
            <td>ConvexAutocompounder</td>
            <td>Auto Compounding Strategy for<br></br>3crv stable Pool</td>
            <td>2K$</td>
            <th>Ethereum Mainnet</th>
            <td>
                <a href="https://etherscan.io/address/0xd88E41f1B456844d1B7365A27f73891A86687AFf#code" target='_blank'>
                <Button style={{color: `#f205b7`}}>Etherscan</Button>
                </a>
            </td>
            <td>
                <a href="https://etherscan.deth.net/address/0xd88E41f1B456844d1B7365A27f73891A86687AFf#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td>
          </tr>
          <tr>
            <td>QuickSwapStrategyV2</td>
            <td>Auto Compounding Strategy for<br></br>TUSD-USDC Quickswap Pool</td>
            <td>2K$</td>
            <th>Polygon Mainnet</th>
            <td>
                <a href="https://etherscan.io/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target='_blank'>
                <Button style={{color: `#f205b7`}}>Etherscan</Button>
                </a>
            </td>
            <td>
                <a href="https://etherscan.deth.net/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td>
          </tr>
        </tbody>
      </table>
            </div>
        )
    }
}

export default About;