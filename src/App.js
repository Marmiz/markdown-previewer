import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Remarkable from 'remarkable';



class App extends Component {
  // props
  constructor(props) {
    super(props);
    this.state = {
      value: '# Once upon a time\n---\n### **React** was used to render `markdown`'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value})
  }

  createMarkup() {
  var md = new Remarkable();
  return {__html: md.render(this.state.value) };
}


  // render html
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-intro">Easy Markdown Previewer</h2>
        </div>

      <section className="section">
        <div className="container">
        <div className="columns">

          <div className="column">
            <label className="label">Write Here</label>
            <p className="control">
              <textarea className="textarea" value={this.state.value} onChange={this.handleChange}></textarea>
            </p>
          </div>

          <div className="column">
            <span className="content" dangerouslySetInnerHTML={this.createMarkup()}></span>
          </div>

        </div>

          <div className="columns">
          <div className="column">
            <div className="content">
              <h4> Made with <i className="fa fa-heart"></i> as part of learning React</h4>
            </div>
          </div>
          </div>

        </div>
      </section>
      </div>
    );
  }
}
// dangerouslySetInnerHTML={this.handleChange()}
export default App;
