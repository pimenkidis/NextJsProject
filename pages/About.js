import React, { Component } from 'react';
// import './bootstrap.min.css';
class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: null,
            da: {
                nama: '',
                alamat: ''
            }
        }
    }


    render() {
        return (
            <div>
                <link rel="stylesheet" href="E:/Belajar/react/bigbos/pages/nprogress.css" />
                halaman about
                <div className="example">Hello World!</div>
              <button class="btn">
                      Notification <span class="badge badge-primary"></span>
              </button>

            </div >
        );
    }
}

export default About;