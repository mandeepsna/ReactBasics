const Filterdata = (props) => {
    const FilterValueSelected=(event)=>
    {
        props.FilterValue(event.target.value);
    }
  return (
    <div>
      <select name="product" id="product" onChange={FilterValueSelected}>
        <option value="all">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
        
      </select>
    </div>
  );
};

export default Filterdata;
