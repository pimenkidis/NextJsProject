import { withRouter } from "next/router";
import React from 'react';
import Axios from 'axios'
class DKegiatan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keg : []
    }
  }
  
  componentDidMount = () => {
    const { router: { query: { name } } } = this.props;
    // console.log(JSON.stringify(name));
    var a = "http://sampeweweh.dx.am/index.php/tps/getKegiatanId/"
    Axios.get(a+name).then((response) => {
      <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%"></div>
      </div>
      console.log(response)
      this.setState({
        keg : response.data
      })
    })
  };
  render() {
    return (
      <div>asa
       {
         this.state.keg.map(k=>{
           return k.judul+k.isi
         })
      }

      </div>
    )
  }
}

export default withRouter(DKegiatan);