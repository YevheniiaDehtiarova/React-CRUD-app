import "./app-filter.css";

const AppFilter = (props) => {
    const buttonsData = [
      { name: "all", label: "All employees" },
      { name: "rise", label: "On hight" },
      { name: "moreThen1000", label: "Sallary more than 1 000 $" },
    ];
    const buttons = buttonsData.map(({ name, label }) => {
      const active = props.filter === name; // true vs false
      const clazz = active ? 'btn-light' : 'btn-outline-night';
      return (
        <button type="button" className={`btn ${clazz}`}
        onClick= {()=> props.onFilterSelect(name)} 
        key={name}>
        {label}
        </button>
      );
    });

    return (
        <div className="btn-group">
           {buttons}
        </div>
    )
}

export default AppFilter;