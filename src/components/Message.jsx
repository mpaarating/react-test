import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem
        leftAvatar={<Avatar src='https://pbs.twimg.com/profile_images/647149686558707712/e64Eklh-.jpg' />}
        >
        {this.props.message}
      </ListItem>
    );
  }
}

export default Message;
