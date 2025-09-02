import React from "react";
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

        <h3>{location}</h3>
        <h3>{bio}</h3>

        <h3>instagram: subodh0611</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
