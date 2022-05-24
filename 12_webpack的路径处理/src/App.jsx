import React, { Component } from "react";
// import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
// import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
// import Home from "@pages/Home.jsx";
// import About from "@pages/About.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello React",
    };
  }

  render() {
    return (
      <div>
        {/* <BrowserRouter>
          <Link to="/home">首页</Link>
          <Link to="/about">关于</Link>
          <Routes>
            <Route path="/home" component={Home}/>
            <Route path="/about" component={About}/>
          </Routes>
        </BrowserRouter> */}
        <h2>{this.state.message}</h2>
      </div>
    );
  }
}

export default App;
