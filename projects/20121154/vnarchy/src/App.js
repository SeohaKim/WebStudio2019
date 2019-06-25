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
import { firebase, auth, provider } from "./firebase";
import logo from "./logo.svg";
import "./App.css";
import Users from "./Users";
import { thisTypeAnnotation } from "@babel/types";
import Add from "./Add";
import Recommend from "./Recommend";

var userments = [
  ,
  "뭐 그럴수도 있죠.",
  "보드게임을 좋아하는 커플이라니 훌륭하군요! 아니라면 굉장히 이상한 취향을 가진 친구사이네요.",
  "3은 굉장히 균형잡힌 숫자에요.",
  "트럼프 카드가 괜히 4문양이 아니랍니다.",
  "서로 물어 뜯고 싸우기에 최고의 숫자네요"
];
var customer = [
  ,
  "방금만난 사이",
  "처음 보는 사이는 아닌 사이",
  "그래도 나름 자주보는 사이",
  "친구",
  "원수"
];
var brain = [, "원숭이", "사람", "머리가 아픈것을 즐기는 마조히스트"];
var time = [, "다음 일정전에 간단하게", "한두시간?", "각잡고 왔다 달리자"];
class App extends Component {
  componentWillMount() {
    this.setState({
      step: 0,
      users: 1,
      friendly: 1,
      brain: 1,
      time: 1,
      user: null
    });
  }
  render() {
    const { step, users } = this.state;
    return (
      <div>
        <Menu>
          <Menu.Item>BoardGame Picker</Menu.Item>
          <Menu.Item
            position="right"
            onClick={() =>
              !this.state.user
                ? auth.signInWithPopup(provider).then(result => {
                    this.setState({ user: result.user });
                  })
                : auth.signOut().then(() => this.setState({ user: null }))
            }
          >
            {auth.currentUser ? "Sign Out" : "Sign In"}
          </Menu.Item>
        </Menu>
        {

        this.state.user? <Add/> :
        <Container
          style={{ justifyContent: "center", alignItems: "center" }}
          textAlign="center"
        >
          {(() => {
            switch (step) {
              case 0:
                return (
                  <Users
                    size="massive"
                    q="몇명이서 함께할까요?"
                    text={[, 1, 2, 3, 4, 5]}
                    ments={userments}
                    plusUser={() =>
                      this.setState({ users: this.state.users + 1 })
                    }
                    minusUser={() =>
                      this.setState({ users: this.state.users - 1 })
                    }
                    userNum={this.state.users}
                  />
                );
                break;
              case 1:
                return (
                  <Users
                    size="massive"
                    q="서로 얼마나 친하신가요?"
                    text={[, 1, 2, 3, 4, 5]}
                    ments={customer}
                    plusUser={() =>
                      this.setState({ friendly: this.state.friendly + 1 })
                    }
                    minusUser={() =>
                      this.setState({ friendly: this.state.friendly - 1 })
                    }
                    userNum={this.state.friendly}
                  />
                );
                break;
              case 2:
                return (
                  <Users
                    size="massive"
                    q="당신의 친구의 지능은?"
                    text={[, 1, 2, 3]}
                    ments={brain}
                    plusUser={() =>
                      this.setState({ brain: this.state.brain + 1 })
                    }
                    minusUser={() =>
                      this.setState({ brain: this.state.brain - 1 })
                    }
                    userNum={this.state.brain}
                  />
                );
                break;
              case 3:
                return (
                  <Users
                    size="massive"
                    q="얼마나 오래 즐기실 생각이신가요"
                    text={[, 1, 2, 3]}
                    ments={time}
                    plusUser={() =>
                      this.setState({ time: this.state.time + 1 })
                    }
                    minusUser={() =>
                      this.setState({ time: this.state.time - 1 })
                    }
                    userNum={this.state.time}
                  />
                );
                break;
              case 4:
                return(
                  <Recommend data={this.state}/>
                )
            }
          })()}
          {
            step < 4 ? <div>
              <Button
            disabled={step < 1}
            onClick={() => this.setState({ step: step - 1 })}
            labelPosition="left"
            icon="angle left"
            content="이전"
          />
          <Button
            onClick={() => this.setState({ step: step + 1 })}
            labelPosition="right"
            icon="angle right"
            content={step < 3?"다음":"완료"}
          />
            </div>:null
          }
          
        </Container>
        }
      </div>
    );
  }
  
}

export default App;
