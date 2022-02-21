import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import react, { Component } from "react";

class App extends Component {
  clientId = nanoid();
  state = {
    contacts: [],
    filter: "",
    name: "",
    number: "",
  };

  onChangeInputName = (evt) => {
    this.setState({ name: evt.currentTarget.value });
  };

  onChangeInputNumber = (e) => {
    this.setState({ number: e.currentTarget.value });
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const a = this.state.name;
    const b = this.state.number;
    this.state.contacts.push({ name: a, number: b });
    this.reset();
  };

  onChangeInputFind = (e) => {
    this.setState({ filter: e.currentTarget.value });
    // this.test()
    // this.state.contacts.find(contact=>contact.name===e.currentTarget.value)
    // console.log(this.state.contacts.map.find(e.currentTarget.value))
  };

  // test=()=>{

  //   this.state.contacts.filter(option=>option.name.includes(this.state.filter))
  //   console.log(this.state.contacts.filter(option=>option.name.includes(this.state.filter)))

  // }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.onChangeInputName}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.onChangeInputNumber}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
        <div>
          <h2>Contacts</h2>
          <label>
            Find contacts by name
            <input type="text" onChange={this.onChangeInputFind} />
          </label>

          <ul>
            {/* {this.state.contacts.find(option=>option.name === "name").map((contact) => (
              <li key={contact.name}>
                <p>{contact.name}:</p>
                <p>{contact.number}</p>
              </li>
            ))} */}
            {this.state.contacts
              .filter((option) => option.name.includes(this.state.filter))
              .map((contact) => (
                <li key={contact.name}>
                  <p>{contact.name}:</p>
                  <p>{contact.number}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
