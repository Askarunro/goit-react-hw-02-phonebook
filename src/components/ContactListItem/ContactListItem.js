import i from './ContactListItem.module.css'

function Item({contacts,filter,onClick}) {
  return (
    <>
      {contacts
        .filter((option) => option.name.toLowerCase().includes(filter))
        .map((contact) => (
          <li key={contact.name} className={i.item}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button type="button" onClick={onClick} className={i.btn}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
}

export default Item;
