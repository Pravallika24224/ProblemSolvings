import { RecoilRoot } from "recoil";
import ToDoList from "./components/ToDoList";

function App() {
  return (
    <RecoilRoot>
      <h2>Recoil To-Do Application</h2>
      <ToDoList/>
    </RecoilRoot>
  );
}

export default App;
