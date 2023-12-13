import React from "react";
import "./App.css";

class Button extends React.Component {
  //Class Component
    render() {
        return (
            <button onClick={this.props.onClick}>{this.props.children}</button>
        );
    }
}

//Function Component
// const Button = (props) => {
//   return <button>{props.children}</button>
// }

// class App extends React.Component {
//   handleOnClick = () => {
//     console.log("Hello")
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleOnClick}>Click Me</button>
//       </div>
//     )
//   }
// }

// helloWorld = () => {
//     console.log("Hello");
// };
// welcomeBack = () => {
//     console.log("Welcome Back");
// };

//     render() {
//         return (
//             <main>
//                 <Button onClick={this.helloWorld}>Hello</Button>
//                 <Button onClick={this.welcomeBack}>Welcome</Button>
//                 <Button onClick={() => alert("Hi")}>Alert</Button> 
//             </main>
//         );
//     }
// }

class App extends React.Component {
    state = {
        showMenu: false
    };

    openMenu = () => {
        this.setState({
            showMenu: true
        });
    };

    closeMenu = () => {
        this.setState({
            showMenu: false
        });
    };

    render() {
        return (
            <main>
                <Button onClick={this.openMenu}>Menu</Button>
                {this.state.showMenu ? (
                    <div className="menu">
                        <Button onClick={this.closeMenu}>X</Button>
                    </div>
                ) : null}
            </main>
        );
    }
}

export default App;
