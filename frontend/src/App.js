import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageReceiver from "./components/ImageReceiver";
import ImageUploader from "./components/ImageUploader";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<ImageUploader />} />
            <Route path="ImageReceiver" element={<ImageReceiver />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
