import "./app-info.css";

const AppInfo = ({employees,increased}) => {
    return (
        <div className="app-info">
            <h1>Account of employees N</h1>
            <h2>The total amount of employees: {employees}</h2>
            <h2>The bonus will receive: {increased} </h2>
        </div>
    )
}

export default AppInfo;