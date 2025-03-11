import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import CustomerTable from "./components/CustomerTable";
import CustomerModal from "./components/CustomerModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null); // Holds data for Edit Mode

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CustomerTable
              openModal={(data) => {
                setModalData(data);
                setIsModalOpen(true);
              }}
            />
          }
        />
      </Routes>

      {/* Customer Create/Edit Modal (Shown when needed) */}
      {isModalOpen && (
        <CustomerModal
          closeModal={() => setIsModalOpen(false)}
          modalData={modalData}
        />
      )}
    </Router>
  );
}

export default App;