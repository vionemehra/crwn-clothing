import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.components";
import Home from "./routes/home/home.components"

const Shop = () => {
  return <h1>Hi this is Shop Components</h1>
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes> 
  )
}

export default App;
