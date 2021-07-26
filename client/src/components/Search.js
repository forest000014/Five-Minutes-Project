import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

class Search extends Component {
  onChangeId = e => {
    if (e.target.value === '') { // 닉네임과 날짜의 onChange를 별개로 관리하자
      this.props.fetchData({ userId: '*' });
      console.log('userId: \'*\''); // [TEST]
      console.log(this.props); // [TEST]
    } else {
      this.props.fetchData({ userId: e.target.value });
      console.log('userId: ' + e.target.value); // [TEST]
      console.log(this.props); // [TEST]
    }
  };

  onChangeMonth = e => {
    if (e.target.value === '') { // 닉네임과 날짜의 onChange를 별개로 관리하자
      this.props.fetchData({ month: '*' });
      console.log('month: \'*\''); // [TEST]
      console.log(this.props); // [TEST]
    } else {
      this.props.fetchData({ month: e.target.value });
      console.log('month: ' + e.target.value); // [TEST]
      console.log(this.props); // [TEST]
    }
  };

  onClear = e => {
    let searchInput = ReactDOM.findDOMNode(this.refs.searchInput);
    searchInput ? (searchInput.value = '') : '';
    this.props.fetchData({ userId: '*', month: '*' });
    console.log('clear button clicked.'); // [TEST]
    console.log(this.props); // [TEST]
  };

  onSubmit = e => {
    e.preventDefault();
  };

  renderTitleAndForm() {
    let titleAndForm = (
      <Container>
        <Row className="show-grid top10">
          <h2> This is the main blue box.</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="search"
                name="searchUserId" // 어디에 쓰이는 값들인가?
                ref="searchInput" // 
                id="searchInput" //
                placeholder="input user_id"
                onChange={this.onChangeId}
              />
              <Input
                type="search"
                name="searchMonth" //
                ref="searchInput" //
                id="searchInput" //
                placeholder="input month"
                onChange={this.onChangeMonth} //
              />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
      </Container>
    );
    console.log('renderTitleAndForm() has been called.');
    return titleAndForm;
  }

  renderFullForm() {
    let fullForm = (
      <Container>
        <Row className="show-grid top10">
          <h2> This is the main blue box. (with data searched)</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input 
                type="search" 
                name="search" 
                id="searchInput" 
                placeholder="input user_id" 
                onChange={this.onChangeId} />
            </FormGroup>
            <Button className="btn-ll5" onClick={this.onClear}>
              Clear
            </Button>
          </Form>
        </Row>
        <Row className="show-grid top10">
          <BootstrapTable data={this.props.searchData} search={false}>
            <TableHeaderColumn dataField="user_id">User id</TableHeaderColumn>
            <TableHeaderColumn dataField="habit_id">Habit id</TableHeaderColumn>
            <TableHeaderColumn dataField="day" isKey={true}>Day</TableHeaderColumn>
            <TableHeaderColumn dataField="num">Times</TableHeaderColumn>
          </BootstrapTable>
        </Row>
      </Container>
    );
    console.log('renderFullForm() has been called.');
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
  console.log('mapStateToProps() has been called.');
  return {
    searchData: state.searchData
  };
}

function mapDispatchToProps(dispatch) {
  console.log('mapDispatchToProps() has been called.');
  return {
    fetchData: (user_id, month) => dispatch({ type: 'FETCH_SEARCH_DATA', payload: user_id })
  };
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
