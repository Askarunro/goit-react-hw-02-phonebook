import l from './Filter.module.css'

function Filter({onChange}) {
  return (
    <label className={l.label}>
      Find contacts by name
      <input type="text" onChange={onChange} />
    </label>
  );
}

export default Filter