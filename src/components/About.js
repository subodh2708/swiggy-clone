import { Component } from "react";
import User from "./User";
// import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent Constructor");
  }

  componentDidMount() {
    // console.log("parent Mount");
  }
  render() {
    // console.log("parent render");
    return (
      <div>
        <h1>About page</h1>
        <User name="Subodh Class" location="Lucknow Class" />
      </div>
    );
  }
}

// const About = function () {
//   return (
//     <div>
//       <h1>About page</h1>
//       {/* <User name="Subodh FC" location="Lucknow FC" /> */}
//       <UserClass name="Subodh Class" location="Lucknow Class" />
//     </div>
//   );
// };
export default About;
