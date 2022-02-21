import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import react, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

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

  onClickDelete = (e) => {
    console.log(e.currentTarget.parentNode)
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.onSubmitForm}
          onChangeName={this.onChangeInputName}
          onChangeNumber={this.onChangeInputNumber}
          nameValue={this.state.name}
          numberValue={this.state.number}
        />
          <h2>Contacts</h2>
          <Filter onChange={this.onChangeInputFind} />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            onClick={this.onClickDelete}
          />
      </div>
    );
  }
}

export default App;
