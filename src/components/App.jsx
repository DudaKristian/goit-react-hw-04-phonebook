import {useState, useEffect} from "react"
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Phonebook from "./Phonebook/Phonebook";

const App = () => {

  const [contacts, setContacts] = useState(() => {
    if (window.localStorage.getItem("contacts")) { 
    return JSON.parse(window.localStorage.getItem("contacts"))
  } else {return []}
});
  
  const [filter, setFilter] = useState("");

  useEffect(() => { window.localStorage.setItem("contacts", JSON.stringify(contacts)) },
  [contacts])

  const addContact = data => {
    const contactName =
      contacts.map(contact =>
      contact.name.toLowerCase())
    if (!contactName.includes(data.name.toLowerCase())) {
      setContacts([data, ...contacts])
      }
    
    else {
      return alert(`${data.name} is allready in contacts`)
    } 
    
  };

  const filterCheck = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const onDelete = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
    }
  

return (
      <div>
        <h1>Phonebook</h1>
        <Phonebook addContact={addContact} />
        <h2>Contacts</h2>
        <Filter onChange={e => setFilter(e.target.value)} filter={filter} />
        <ContactList filter={filterCheck()} onDelete={onDelete} />
      </div>
    )
}

export default App