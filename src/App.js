import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import store from "./Features/store";

function App() {
  return (
    <Provider store={store}>
        <div className='flex flex-col'>
          <Navbar />
          <div className='flex '>
            <Sidebar className='bg-slate-600' />
            <Outlet />
          </div>
        </div>
    </Provider>
  );
}

export default App;
