import { useState,createContext} from 'react';

export const chatContext = createContext({});

export const ChatContextProvider = ({ children }) => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    const [messageList, setMessageList] = useState([]);
    const [room, setRoom] = useState('');
    const [members, setMembers] = useState([]);

    return (
        <chatContext.Provider value={{ username, setUsername, message, setMessage, messageList, setMessageList, room, setRoom, members, setMembers }}>
            {children}
        </chatContext.Provider>
    );
};
