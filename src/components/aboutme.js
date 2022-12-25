import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";
import { CardText } from "react-mdl";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="contracts-page" stlye="overflow-x:scroll">
                <h1 style={{textAlign: 'center', color: `white`, paddingTop: `30px`}}>
                    Deployed Contracts
                </h1>
            <view style={{ flexDirection: 'row'}}>
            <table className="contracts-table">
            <tbody>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>TVS</th>
            <th>Chain</th>
          </tr>
        </thead>
        
          <tr>
            <td>Ondo Coinlist Distributor</td>
            <td>Token Distribution through Merkle Root<br></br> cryptography</td>
            <td>10M$</td>
            <a href="https://etherscan.io/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target='_blank'>
            <td style={{color: `#f205b7`}}>Ethereum Mainnet</td>
            </a>
            {/* <td>
                <a href="https://etherscan.deth.net/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td> */}
          </tr>
          <tr>
            <td>Convex Auto Compounder</td>
            <td>Auto Compounding Strategy for 3crv stable Pool</td>
            <td>2K$</td>
            <a href="https://etherscan.io/address/0xd88E41f1B456844d1B7365A27f73891A86687AFf#code" target='_blank'>
            <td style={{color: `#f205b7`}}>Ethereum Mainnet</td>
            </a>
            {/* <td>
                <a href="https://etherscan.deth.net/address/0xd88E41f1B456844d1B7365A27f73891A86687AFf#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td> */}
          </tr>
          <tr>
            <td>QuickSwap Strategy V2</td>
            <td>Auto Compounding Strategy for TUSD/USDC <br></br>Quickswap Pool</td>
            <td>2K$</td>
            <a href="https://polygonscan.com/address/0xa96611fd9c002ae19bfcf5b682e97db590ff8d1d#tokentxns" target='_blank'>
            <td style={{color: `#f205b7`}}>Polygon Mainnet</td>
            </a>
            {/* <td>
                <a href="https://etherscan.deth.net/address/0x3c0417900f5231d448c32c7f4cad40e1efad36fc#code" target="_blank">
                <Button style={{color: `#f205b7`}}>CodeView</Button>
                </a>
            </td> */}
          </tr>
        </tbody>
            </table>
            </view>
            </div>
        )
    }
}

export default About;