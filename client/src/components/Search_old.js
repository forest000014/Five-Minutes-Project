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
  // 그럼 이 state는 어디서 받아오는 거지? state.searchData는 언제 어디서 만들어지는 거지?
  //  -> connect가 react-redux에서 import 해온 것으로 미루어 보아... redux store에 저장된 state일 것으로 추측.
  return {
    searchData: state.searchData // 여기서 this.props.searchData에 값을 넣어주는 것 같다.
  };
}

function mapDispatchToProps(dispatch) {
  return { // 위에서 사용하는 fetchData()는 여기서 정의한 메소드
    fetchData: firstName => dispatch({ type: 'FETCH_SEARCH_DATA', payload: firstName })
  };
}

const ConnectedSearch = connect(mapStatetoProps, mapDispatchToProps)(Search);

export default ConnectedSearch;
