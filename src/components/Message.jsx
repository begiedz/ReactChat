import React from 'react';

const Message = () => {
    return (
        <div className="message">
            <div className="messageInfo">
                <img
                    src="https://cdn.pixabay.com/photo/2023/05/11/03/34/white-cockatoo-7985434_960_720.jpg"
                    alt="woman"
                />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>Test</p>
                <img
                    src="https://cdn.pixabay.com/photo/2023/05/11/03/34/white-cockatoo-7985434_960_720.jpg"
                    alt="woman"
                />
            </div>
        </div>
    );
};

export default Message;
