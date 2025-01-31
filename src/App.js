import { useState } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";

export default function Messenger() {

  function initChats() {
    console.log("HELLO")
    let chats = {}
    for (const contact of contacts) { 
      chats[contact.name] = ""
    }
    return chats
  }

  const [to, setTo] = useState(contacts[0]);
  const [chats, setChats] = useState(() => initChats());

  function onChange(e) {
    // setText(e.target.value)
    setChats({...chats, {[to.name]: e.target.value}})
  }

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={(contact) => setTo(contact)}
      />
      <Chat key={to.id} contact={to} chat={chats[to.name]} onChange={onChange}/>
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
