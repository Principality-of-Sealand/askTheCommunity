
import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Question from "./Question.jsx";
const srv = 'http://ec2-18-216-222-192.us-east-2.compute.amazonaws.com:8080'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: props.id === undefined ? 120000 : props.id,
      passedQuestions: [],
      questions: []
    };
  }

  componentDidMount() {
    this.onSubmitHandler();
  }

  onSubmitHandler() {
    axios
    .get(`${srv}/api/questions/${this.state.restaurantId}`)
    .then(({ data }) => {
        this.setState({
          questions: data,
          passedQuestions: [data[0], data[1]]
        });
      })
      .catch(err => {
        console.log("Error getting data on client...", err);
      });
  }
  conditionalRender() {
    const NoQuestion = styled.p`
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin-bottom: 12px;
    `;
    const Button = styled.button`
      display: inline-block;
      vertical-align: middle;
      margin: 0;
      cursor: pointer;
      border: 1px solid;
      font-weight: bold;
      text-align: center;
      font-size: 14px;
      line-height: 1.28571em;
      border-color: #ccc;
      color: #666;
      background-color: #f7f7f7;
      padding: 8px 19px 9px;
      border-radius: 3px;
      box-shadow: 0 1px 1px;
    `;
    if (this.state.questions.length === 0) {
      return (
        <div>
          <NoQuestion>
            Yelp users haven't asked any questions yet about this restaurant.
          </NoQuestion>{" "}
          <br />
          <Button>Ask a Question</Button>
        </div>
      );
    } else {
      return (
        <div>
          {this.state.passedQuestions.map((question) => {
            if (question !== undefined) {
              return (
                <div key={question.id}>
                  <Question
                    data={question.user_id}
                    message={question.text}
                    qid={question.id}
                    
                  />
                </div>
              );
            }
          })}
          <br />
          <a href="#">See all {this.state.questions.length} questions</a> <br />
        </div>
      );
    }
  }

  render() {
    const Header = styled.h2`
      color: #d32323;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      border-bottom-color: #e6e6e6;
      border-bottom-width: 1px;
      border-bottom-style: solid;
    `;

    return (
      <div>
        <Header>Ask The Community</Header>
        {this.conditionalRender()}
      </div>
    );
  }
}

export default App;
