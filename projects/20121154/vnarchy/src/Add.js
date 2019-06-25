import React, { Component } from "react";
import { Segment, Input, Form, Divider, Button } from "semantic-ui-react";
import { db } from "./firebase";

export default class Add extends Component {
  state = {
    name: "",
    minPlayer: 0,
    maxPlayer: 0,
    difficulty: 1,
    friendly: 1,
    ruleTime: 0,
    playTime: 0
  };
  attachHandler = name => (e, d) => this.setState({ [name]: d.value });
  save = () =>
    db
      .collection("games")
      .add(this.state)
      .then(doc =>
        this.setState({
          name: "",
          minPlayer: 0,
          maxPlayer: 0,
          difficulty: 1,
          friendly: 1,
          ruleTime: 0,
          playTime: 0
        })
      );

  render() {
    const {
      minPlayer,
      maxPlayer,
      difficulty,
      friendly,
      ruleTime,
      playTime
    } = this.state;

    return (
      <Segment style={{ justifyContent: "center", alignItems: "center" }}>
        <Form
        >
          게임 이름:{" "}
          <Input
            type="text"
            value={this.state.name}
            onChange={this.attachHandler("name")}
          />
          <Divider />
          최소 플레이 인원:{" "}
          <Input
            type="number"
            value={minPlayer}
            onChange={this.attachHandler("minPlayer")}
          />
          <Divider />
          최대 플레이 인원:{" "}
          <Input
            type="number"
            value={maxPlayer}
            onChange={this.attachHandler("maxPlayer")}
          />
          <Divider />
          난이도:{" "}
          <Input
            type="number"
            value={difficulty}
            onChange={this.attachHandler("difficulty")}
          />
          <Divider />
          친밀도:{" "}
          <Input
            type="number"
            value={friendly}
            onChange={this.attachHandler("friendly")}
          />
          <Divider />
          설명시간:{" "}
          <Input
            type="number"
            value={ruleTime}
            onChange={this.attachHandler("ruleTime")}
          />
          <Divider />
          플레이시간:{" "}
          <Input
            type="number"
            value={playTime}
            onChange={this.attachHandler("playTime")}
          />
          <Divider />
          <Button onClick={this.save}>저장</Button>
        </Form>
      </Segment>
    );
  }
}
