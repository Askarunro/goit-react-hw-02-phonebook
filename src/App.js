import logo from "./logo.svg";
import "./App.css";
import { nanoid } from "nanoid";
import react, { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import { logDOM } from "@testing-library/react";

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

    let exist = false
    this.state.contacts.forEach(contact=>{
      if(contact.name===this.state.name){
        exist=true
      }
    })
    if(!exist){

      this.state.contacts.push({
        name: this.state.name,
        number: this.state.number,
      });

    }
    else alert(`${this.state.name} is already i contacts`);
  
    this.reset();
  };

  onChangeInputFind = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  onClickDelete = (e) => {
    let x = this.state.contacts.findIndex(contact=>contact.name===e.currentTarget.parentNode.dataset.id)
    this.state.contacts.splice(x,1)
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
