import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn, InsertButton  } from 'react-bootstrap-table';
import axios from 'axios'
class TabelIndexStaff extends Component {
    constructor(props) {
        super(props);        
    }
    onRowClick= (row) => {
        console.log(row);       
    } 
    //foto
    tombolAction(cell, row) { 
        const a =  "http://sampeweweh.dx.am/"+cell;
       // console.log(a);
        return (<div>
          <img src="{a}" alt="xxx" className="rounded-circle"></img>
        </div>);        
    }
    deleteData = (del,dropRowKeys) => {
        const dropRowKeysStr = dropRowKeys.join(',');       
        if (confirm(`(It's a custom confirm)Are you sure you want to delete ${dropRowKeysStr}?`)){
            axios.post("http://sampeweweh.dx.am/index.php/tps/delStaff", dropRowKeys).then((response) => {
                console.log(response);
                this.props.refreshData();               
            })
        }
      }    
    render() {
        const selectRow = {
            mode: 'checkbox',  // multi select
            clickToSelect: true            
        };
        const options = {
            onRowClick: this.onRowClick,//ketika baris diklik
            insertBtn: this.props.showFormData,//utk show form tambah
            handleConfirmDeleteRow: this.deleteData,//utk deletedata
           
        };
        return (
            <div>
                 <BootstrapTable data={this.props.d} 
                            striped 
                            insertRow                                
                            deleteRow={ true }                                               
                            pagination options={options} 
                            selectRow={selectRow} search={ true } 
                            multiColumnSearch={ true } 
                            exportCSV={ true }>          
                                 <TableHeaderColumn dataField='foto' 
                                    dataFormat={ this.tombolAction.bind(this) }>
                                </TableHeaderColumn>                                  
                                <TableHeaderColumn dataField='nama'>Nama</TableHeaderColumn>
                                <TableHeaderColumn dataField='bidang'>Bidang</TableHeaderColumn>
                                <TableHeaderColumn dataField='foto'>Alamat</TableHeaderColumn>
                                <TableHeaderColumn dataField='id' isKey hidden> Action</TableHeaderColumn> 
                                                          
                            </BootstrapTable>
            </div>
        );
    }
}

export default TabelIndexStaff;


 // this.setState({
        //     tDataIndex : {
        //         nama: row.nama,
        //         alamat: row.alamat,
        //         keterangan: row.keterangan,
        //         deskripsi: row.deskripsi,
        //         password : row.password,
        //         email : row.email,
        //         bidang : row.bidang,
        //     }
        // })