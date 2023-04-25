
import { useContext } from "react"
import Context from "../context/context"
import Menu from "../Navigation/Menu"
import LoadingComponent from "../UI/LoadingComponent"
import HeaderComponent from "./Header"

const Layout = (props) => {

  const {isLoading, activeUser} = useContext(Context)

  return(
    !isLoading && activeUser ?
      <>
      <HeaderComponent />
      <div className="wrapper">
      {props.children}
      </div>
      <Menu />
      </>
      :
      <LoadingComponent />
  )

}

export default Layout