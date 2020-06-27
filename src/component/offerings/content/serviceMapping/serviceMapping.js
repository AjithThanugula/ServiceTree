import React, { Component, Fragment } from "react";
import Content from "../content";
import { withRouter } from "react-router-dom";
import { getOfferingsData } from "../../../../api/ajaxCalls/_base";
import { DataGrid, GridColumn, NumberBox, ComboBox , Label} from 'rc-easyui';

export class ServiceMapping extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      total: 0,
      pageNumber: 1,
      pageSize: 20,
      data: [],
      loading: false,
      pagePosition: "bottom",
      data: this.getData(),
     
    };
  }

  getData(pageNumber, pageSize) {
   
   let data=null;
   let total = 100000;
   let start = (pageNumber - 1) * pageSize;
   return data;
  }
  static getDerivedStateFromProps(props, state) {
    let id = props.match.params.id;

    return { id: id };
  }
  componentDidMount() {
    this.loadPage(this.state.pageNumber, this.state.pageSize)
  }
  loadPage(pageNumber, pageSize) {
    this.setState({ loading: true })
    setTimeout(() => {
      let result = this.getData(pageNumber, pageSize);
      this.setState(Object.assign({}, result, {
        data: result.rows,
        loading: false
      }))
    }, 1000);
  }
  getData(pageNumber, pageSize) {
    let total = 100000;
    let data = [];
    // let start = (pageNumber - 1) * pageSize;
    // for (let i = start + 1; i <= start + pageSize; i++) {
    //   let amount = Math.floor(Math.random() * 1000);
    //   let price = Math.floor(Math.random() * 1000);
      // data.push({
      //    inv: "Inv No " + i,
      //   // name: "Name " + i,
      //   // amount: amount,
      //   // price: price,
      //   // cost: amount * price,
      //   // note: "Note " + i
      // });
    //}
   // return null;
    return {
      total: total,
      pageNumber: pageNumber,
      pageSize: pageSize,
      rows: data
    };
  }
  handlePageChange(event) {
    this.loadPage(event.pageNumber, event.pageSize)
  }
  render() {
    return (
            <div>
              <Content></Content>
              <h2>Pagination - Lazy Load</h2>
              <div style={{ marginBottom: 10 }}>
                <Label htmlFor="c1">Pager on: </Label>
                <ComboBox inputId="c1" style={{ width: 120 }}
                  data={this.state.options}
                  editable={false}
                  panelStyle={{ height: 'auto' }}
                  value={this.state.pagePosition}
                  onChange={(value) => this.setState({ pagePosition: value })}
                />
              </div>
              <DataGrid
                style={{ height: 250 }}
                pagination
                lazy
                {...this.state}
                onPageChange={this.handlePageChange.bind(this)}
              >
                <GridColumn field="inv" title="Inv No"></GridColumn>
                <GridColumn field="name" title="Name"></GridColumn>
                <GridColumn field="amount" title="Amount" align="right"></GridColumn>
                <GridColumn field="price" title="Price" align="right"></GridColumn>
                <GridColumn field="cost" title="Cost" align="right"></GridColumn>
                <GridColumn field="note" title="Note"></GridColumn>
              </DataGrid>
            </div>
          );
        }
      }
       
export default withRouter(ServiceMapping);
