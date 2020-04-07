import React, { Component } from 'react';

export default class Menu extends Component{
    render (){
        return(
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/index.html">Proj</a></li>
                <li><a href="/index.html">Contact</a></li>
            </ul>
        );
    }
}