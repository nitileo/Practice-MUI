import Header from "../Components/Header"
import Sidebar from "../Components/Sidebar"

const Layout = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <Header />
    </div>
  )
}
export default Layout