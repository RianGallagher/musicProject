import React, { Component } from 'react';
import Chat from '../components/ChatScreen';
import SendBird from 'sendbird';


export default class chatScreenContainer extends React.Component {

  constructor(props) {
    super(props);
    state = {}
    this.getOpenChats = this.getOpenChats.bind(this);
    this.sb = new SendBird({ 'appId': 'DB1DDFB5-2EA6-44D1-AEAA-74E33BB11119' });
  }

  getOpenChats = async() => {
    openChannelListQuery = this.sb.OpenChannel.createOpenChannelListQuery();
    openChannelListQuery.next(function (channels, error) {
        if (error) {
            return;
        }

        console.log(channels);
    });
  }

  render() {
      return (
        <ChatScreen
          getOpenChats={this.getOpenChats}
        />
      );
  }
}
