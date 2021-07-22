import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Form, FormGroup, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';

class Search extends Component {
  onChange = e => {
    if (e.target.value === '') { // 닉네임과 날짜의 onChange를 별개로 관리하자
      this.props.fetchData({ firstName: '*' });
    } else {
      this.props.fetchData({ firstName: e.target.value });
    }
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
          <h2> This is main blue box.</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input
                type="search"
                name="searchUserId" //
                ref="searchInput"
                id="searchInput"
                placeholder="input user_id"
                onChange={this.onChange}
              />
              <Input
                type="search"
                name="searchMonth" //
                ref="searchInput" //
                id="searchInput" //
                placeholder="input month"
                onChange={this.onChange} //
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
          <h2> This is main blue box. (with data searched)</h2>
        </Row>
        <Row className="show-grid top10">
          <Form inline onSubmit={this.onSubmit}>
            <FormGroup>
              <Input type="search" name="search" id="searchInput" placeholder="input user_id" onChange={this.onChange} />
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
  return {
    searchData: state.searchData
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: firstName => dispatch({ type: 'FETCH_SEARCH_DATA', payload: firstName })
  };
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
