import React from "react";
import UserContext from "../utils/UserContext";
class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };

    // console.log("child constructor");
  }

  async componentDidMount() {
    // console.log("child mount");
    const data = await fetch("https://api.github.com/users/subodh2708");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did Update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    // console.log(" child render");
    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div>
        <h1>{name}</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h1 className="font-bold text-xl">{loggedInUser}</h1>
          )}
        </UserContext.Consumer>
        <h3>{location}</h3>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h2 className="text-xl font-bold">{loggedInUser}</h2>
          )}
        </UserContext.Consumer>
        <h3>{bio}</h3>

        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
