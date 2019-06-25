import React, { Component } from "react";
import {
  Menu,
  Container,
  Icon,
  Form,
  Input,
  Header,
  Button,
  Label,
  Segment
} from "semantic-ui-react";


export default class Users extends Component {
  
  render() {
    const {userNum,plusUser,minusUser,q,text,size, ments} = this.props
    return (
      <Segment
        style={{ justifyContent: "center", alignItems: "center" }}
        textAlign="center"
      >
        <Header style={{ marginTop: "100px", marginBottom: "100px" }}>
          {q}
        </Header>
        <Button.Group size={size}>
          <Button icon="angle left" disabled={userNum <2} onClick={minusUser} />
          <Button.Or text={text[userNum]} />
          <Button icon="angle right" disabled={userNum >= text.length - 1} onClick={plusUser}/>
        </Button.Group>
        <Header style={{ marginTop: "100px", marginBottom: "30px" }}>
          {ments[userNum]}
        </Header>
      </Segment>
    );
  }
}
