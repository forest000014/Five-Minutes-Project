import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

class Search extends Component {
  onChange = e => {
    if (e.target.value === '') {
      this.props.fetchData({ firstName: '*' }); 
    } else {
      this.props.fetchData({ firstName: e.target.value });
    }
    // 여기서 업데이트 해주는 firstName property는 어디에서 쓰이지?
    //   -> Sagas.js 의 searchData 생성에 쓰임.
    // 'firstName'은 어디의 값? 어떻게 쓰이지?
    //   -> fetchData에 정의된 dispatch()를 통해, redux store의 state에 저장된다.
    //   -> 이는 redux의 connect()를 통해, <ConnectedSearch>의 props로 넘겨진다.
    console.log();
  };

  onClear = e => {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
    searchInput ? (searchInput.value = '') : '';
    this.props.fetchData({ firstName: '*' });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  renderTitleAndForm() {
    let titleAndForm = (
      <Container>
        <Row className="show-grid top10">
          <h2> Filter Authors Database by First Name</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="search"
                name="search"
                ref="searchInput"
                id="searchInput"
                placeholder="First Name"
                onChange={this.onChange}
              />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
      </Container>
    );

    return titleAndForm;
  }

  renderFullForm() {
    let fullForm = (
      <Container>
        <Row className="show-grid top10">
          <h2> Filter Authors Database by First Name</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="search" name="search" id="searchInput" placeholder="First Name" onChange={this.onChange} />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
        <Row className="show-grid top10">
          <BootstrapTable data={this.props.searchData} search={false}>
            <TableHeaderColumn dataField="first_name">First Name</TableHeaderColumn>
            <TableHeaderColumn dataField="last_name" isKey={true}>Last Name</TableHeaderColumn>
          </BootstrapTable>
        </Row>
      </Container>
    );
    return fullForm;
  }

  render() {
    if (this.props.searchData.length !== 0) {
      return this.renderFullForm();
    } else {
      return this.renderTitleAndForm();
    }
  }
}

function mapStatetoProps(state) { 
  // 이 state는 어디서 받아오는 거지? 
  //  -> connect가 redux store에 저장된 state를 props로 넘겨주기 위해 필요
  // state.searchData는 언제 어디서 만들어지는 거지?
  //  -> dispatch가 실행될 때, reducer가 state를 변경해줌.
  //  -> dispatch를 여기서는 fetchData() 메소드에 정의해 놓음.
  //  -> 그래서 onChange, onClear 이벤트가 발생할 때마다, fetchData()를 실행하여, redux store의 state를 변경해줌.
  return {
    searchData: state.searchData // 이 리턴값을 이용해 this.props.searchData에 값을 넣어주는 것 같다.
  };
}

function mapDispatchToProps(dispatch) {
  return { // 위에서 사용하는 fetchData()는 여기서 정의한 메소드
    fetchData: firstName => dispatch({ type: 'FETCH_SEARCH_DATA', payload: firstName })
  };
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
