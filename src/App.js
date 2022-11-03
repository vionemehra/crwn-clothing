import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.components";
import Home from "./routes/home/home.components";
import Authentication from "./routes/authentication/authentication.components";


const Shop = () => {
  return <h1>Hi this is Shop Components</h1>
}


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes> 
  )
}

export default App;
