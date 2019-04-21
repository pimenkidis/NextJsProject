import React, { Component } from 'react';
import Nav from './bagian/Nav';
import Container from './bagian/Container';
import Kegiatan from './bagian/Kegiatan';
class index extends Component {    
    render() {
        return (
            <div>            
               <Nav />
               <Container /> 
               <Kegiatan />
            </div>     
        );
    }
}

export default index;