
import Menu from "../Navigation/Menu"
import HeaderComponent from "./Header"

const Layout = (props) => {

  return(
    <>
      <HeaderComponent />
      <div className="wrapper">
      {props.children}

      </div>
      <Menu />
    </>
  )

}

export default Layout