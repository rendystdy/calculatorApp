import React, { Component } from "react";
import Button from "./components/Button";
import "./css/style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "0",
      previous: [],
      nextReset: false
    };
  }

  reset = () => {
    this.setState({ current: "0", previous: [], nextReset: false });
  };

  addToCurrent = symbol => {
    console.log("symbol", symbol);
    if (["/", "-", "+", "*"].indexOf(symbol) > -1) {
      let { previous } = this.state;
      previous.push(this.state.current + symbol);
      console.log(previous);

      this.setState({
        previous,
        nextReset: true
      });
    } else {
      if (
        (this.state.current === "0" && symbol !== ".") ||
        this.state.nextReset
      ) {
        this.setState({ current: symbol, nextReset: false });
      } else {
        this.setState({ current: this.state.current + symbol });
      }
    }
  };

  calculate = symbol => {
    let { previous, current, nextReset } = this.state;
    if (previous.length > 0) {
      current = eval(String(previous[previous.length - 1] + current));
      console.log(current);
      this.setState({
        previous,
        current,
        nextReset: true
      })
    } else {
    }
  };

  render() {
    const buttons = [
      {
        symbol: "c",
        cols: 3,
        action: this.reset
      },
      {
        symbol: "/",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "7",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "8",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "9",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "*",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "4",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "5",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "6",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "-",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "1",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "2",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "3",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "+",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "0",
        cols: 2,
        action: this.addToCurrent
      },
      {
        symbol: ".",
        cols: 1,
        action: this.addToCurrent
      },
      {
        symbol: "=",
        cols: 1,
        action: this.calculate
      }
    ];
    return (
      <div>
        {this.state.previous.length > 0 ? (
          <div className="floaty-last">
            {this.state.previous[this.state.previous.length - 1]}
          </div>
        ) : null}
        <input type="text" className="result" value={this.state.current} />
        {buttons.map((btn, i) => {
          return (
            <Button
              key={i}
              symbol={btn.symbol}
              cols={btn.cols}
              action={symbol => btn.action(symbol)}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
