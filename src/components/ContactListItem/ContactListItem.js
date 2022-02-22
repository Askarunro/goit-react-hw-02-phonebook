import i from './ContactListItem.module.css'

function Item({contacts,filter,onClick}) {
  return (
    <>
      {contacts
        .filter((option) => option.name.toLowerCase().includes(filter))
        .map((contact) => (
          <li key={contact.name} className={i.item} data-id={contact.name}>
            <p>{contact.name}:</p>
            <p>{contact.number}</p>
            <button type="button" onClick={()=>onClick(contact.name)} className={i.btn}>
              Delete
            </button>
          </li>
        ))}
    </>
  );
}

export default Item;
