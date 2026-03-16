import { useContext } from "react";
import { DataProvider } from "./Provider/Provider";

const Dashboard = () => {
    const {focus}=useContext(DataProvider)
    return (
        <div>
           <h1>this is Dashboard</h1> 
        </div>
    );
};

export default Dashboard;