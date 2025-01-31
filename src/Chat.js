import { useState } from "react";

export default function Chat({ contact, chat, onChange }) {
  return (
    <section className="chat">
      <textarea
        value={chats}
        placeholder={"Chat to " + contact.name}
        onChange={onChange}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
