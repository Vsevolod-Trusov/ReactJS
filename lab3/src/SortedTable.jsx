import React, {useMemo, useState} from 'react'

export default class SortedTable extends React.Component {
    constructor(props) {
        super(props);
        this.sorted = {name: true, price: true, stock: true }
        this.state = {array: this.things}
    }
    things = [
        {name: "Butter", price: 0.9, stock: 99},
        {name: "Cheese", price: 4.9, stock: 20},
        {name: "Franc French Cheese", price: 99, stock: 2},
        {name: "Heavy Cream", price: 3.9, stock: 0},
        {name: "Milk", price: 1.9, stock: 32},
        {name: "Sour Cream", price: 2.9, stock: 86},
        {name: "Yoghurt", price: 2.4, stock: 12}
    ]
    tableStyle={
        td:{
            padding: "10px 20px",
            border: '1px solid black'
        },
        table:{
            marginLeft:'360px',
            marginTop:'50px',
            borderCollapse: 'collapse',
            background:'#3ab479',
            fontWeight: "bold",
            fontSize: "20px"
        }
    }
    Dosort(param) {
        let direction = this.sorted[param] ? 1 : -1,
            goodsCopy = [...this.things].sort(function (a, b) {
                if (a[param] > b[param]) {
                    return direction;
                }
                if (a[param] < b[param]) {
                    return direction * -1;
                }
                return 0;
            });
        this.sorted[param] = !this.sorted[param];
        this.setState({ array: goodsCopy });
    }
    buildTable =()=>{
        let NumOfString = 0
        return this.state.array.map((item)=>{
            let inStockStyle = {};
                if(item.stock < 3){
                    inStockStyle = {
                        color: "#dad951"}
                }
                if(item.stock === 0){
                    inStockStyle  = {
                        color: "#f24843"}
                }
                return(
                    <tr>
                        <td style={this.tableStyle.td}>{++NumOfString}</td>
                        <td style={this.tableStyle.td}>{item.name}</td>
                        <td style={this.tableStyle.td}>{item.price}</td>
                        <td style={Object.assign({}, this.tableStyle.td, inStockStyle)}>
                            {item.stock}
                        </td>
                    </tr>
                )
            }
        )
    }


    render(){
        return(
            <table style={this.tableStyle.table}>
                <thead>
                <tr>
                    <td style={this.tableStyle.td}>ID</td>
                    <td style={this.tableStyle.td} onClick={()=>this.Dosort("name")}>
                        Name
                    </td >
                    <td style={this.tableStyle.td} onClick={()=>this.Dosort("price")}>
                        Price
                    </td>
                    <td style={this.tableStyle.td} onClick={()=>this.Dosort("stock")}>
                        Stock
                    </td>
                </tr>
                </thead>
                <tbody>
                    {this.buildTable()}
                </tbody>
            </table>
        )
    }
}