import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import AdmissionPage from "./Components/AdmissionForm/AdmissionPage";
import StudentList from "./Components/AdmissionForm/StudentList";
import StudentDetails from "./Components/AdmissionForm/StudentDetails";
import { Provider } from "react-redux";
import store from "./Components/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/admission" element={<AdmissionPage />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
