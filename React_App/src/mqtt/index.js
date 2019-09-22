import React from 'react'
import '../../App.css';

import { Connector } from 'mqtt-react';
import { subscribe } from 'mqtt-react';

const mqttConection = (props) => {
    // Messages are passed on the "data" prop
    const MessageList = (props) => (
        props.data.map( (message) => {
            console.log(message)
            message
        })
    );
    // simple subscription to messages
    subscribe({
        topic: 'restaurant/buttons'
    })(MessageList)

    return (
        <Connector mqttProps="ws://192.168.100.103:12345/">
        </Connector>
    )
};

export default mqttConection;

