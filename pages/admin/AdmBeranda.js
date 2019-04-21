import React, { Component } from 'react';
import axios from 'axios'
import { InsertButton } from 'react-bootstrap-table';
import TabelIndexStaff from '../bagian/TabelIndexStaff';
import Boots from '../bagian/Boots';
import FormIndexTambahData from '../bagian/FormIndexTambahData';
import NavAdmin from '../bagian/NavAdmin';
import Nav from '../bagian/Nav';
class AdmBeranda extends Component {
    constructor(props) {
        super(props);
        this.state = {
            d: [],
            img: null,
            tambahStaf: false,
            tDataIndex: {
                nama: '',
                alamat: '',
                keterangan: '',
                deskripsi: '',
                password: '',
                email: '',
                bidang: '',
            },
            curenId: '',
            idDelet: [],
            curIn: 0

        }
    }
    componentDidMount() {
        axios.get("http://sampeweweh.dx.am/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                d: response.data
            })
        })
    }
    refreshData = () => {
        axios.get("http://sampeweweh.dx.am/index.php/tps/getStaff").then((response) => {
            console.log(response.data);
            this.setState({
                d: response.data
            })
        })
    }
    refreshForm = () => {
        this.setState({
            tambahStaf: !this.state.tambahStaf
        })

    }
    //ketika diklik form tambah data muncul
    showFormData = () => {
        return (
            <InsertButton
                btnText='Tambah Data'
                btnContextual='btn-danger'
                className='my-custom-class'
                btnGlyphicon='glyphicon-add'
                onClick={() => (this.setState({ tambahStaf: !this.state.tambahStaf }))} />
        );
    }
     render() {
        return (
            <div>
                <Boots />
                {/* <NavAdmin title="halaman beranda" /> */}
                <NavAdmin />
                <div className="container">
                    <div className="row">
                        {this.state.curenId}
                        <br /><br />
                        {
                            this.state.tambahStaf ?
                                <div>
                                    <FormIndexTambahData
                                        refreshData={this.refreshData}
                                    />
                                </div>
                                :
                                <div></div>
                        }
                        <br />
                    </div>
                    {/* end of row */}
                    <div className="row">
                        <div className="col-sm-12">
                            <TabelIndexStaff
                                d={this.state.d}
                                showFormData={this.showFormData}
                                refreshData={this.refreshData}
                                refreshForm={this.refreshForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdmBeranda;