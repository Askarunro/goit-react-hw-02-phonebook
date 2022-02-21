import f from './ContactForm.module.css'

function Form({onSubmit,onChangeName,onChangeNumber,nameValue,numberValue}) {
  return (
    <form onSubmit={onSubmit} className={f.form}>
      <label className={f.label}>
        Name
        <input
          type="text"
          name="name"
          value={nameValue}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onChangeName}
        />
      </label>
      <label className={f.label}>
        Number
        <input
          type="tel"
          name="number"
          value={numberValue}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onChangeNumber}
        />
      </label>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default Form;
