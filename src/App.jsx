import Layout from "./layout/Index"
import { InputData } from './context/InputData'

const App = () => {
  return (
    <div className="bg-layoutBg h-full">
      <InputData>
      <Layout/>
      </InputData>
    </div>

)
}

export default App