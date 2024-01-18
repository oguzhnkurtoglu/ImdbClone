import Layout from "./layout/Index"
import {ApiDataProvider} from "./context/Movies"

const App = () => {
  return (
    <div className="bg-layoutBg">
      <ApiDataProvider>
      <Layout/>
      </ApiDataProvider>
    </div>

)
}

export default App