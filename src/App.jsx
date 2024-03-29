import {BrowserRouter,Routes,Route} from "react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";

export default function App() {

  return <div>
  <BrowserRouter>
  <Routes>

<Route path = "homepage" element ={<Homepage/>}/>
<Route path="product" element={<Product/>} />
<Route path="pricing" element = {<Pricing/>}/>
<Route path="app" element = {<AppLayout/>}/>
<Route path ="*" element = {<PageNotFound/>}/>
  </Routes>

  </BrowserRouter>

  </div>
}
