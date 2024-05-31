import "./App.css";
import { Table } from "./components/tables/index.js";
import { DrawerPage } from "./components/widgets/drawer";

function App() {
  return (
    <div className="flex">
      <DrawerPage />
      <Table />
    </div>
  );
}

export default App;
