import React, { Component } from 'react';
import logoImg from './logo.jpg';
import './logo.scss'
export default class Logo extends Component {
    render() {
        return (
           <div className="logo-container">
               <img src={logoImg} alt=""/>
           </div>
        )
    }
}
