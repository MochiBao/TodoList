const Filter = ({filter, filterValue}) => {
  return (
    <label>
        Filter
        <input 
        type="text"
        onChange={filter}
        value={filterValue}>
        </input>
    </label>
  )
}

export default Filter