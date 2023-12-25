import { BrowserRouter,Routes,Route } from "react-router-dom"
import  Home  from "./Home"
import Contact from "./Contact"
import About from "./About"

const MyRouter = () => {
  return (
    <div>
      
< BrowserRouter>

< Routes>

< Route path="/" element={<Home />} />

< Route path="/contact" element={<Contact />} />

< Route path="/about" element={<About />} />

  </Routes>

</BrowserRouter>
    </div>
  )
}



export default MyRouter;
