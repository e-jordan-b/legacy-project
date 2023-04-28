import { useContext } from "react";
import Context from "../context/context";
import EventList from "../EventList";
import Layout from "../Layout/Layout";
import SearchComponent from "../UI/SearchComponent";

const HomePage = () => {
const{events} = useContext(Context)
  return (
    <Layout>
      <div className="no-overflow">
      <SearchComponent />
      <EventList events={events}/>
      </div>
    </Layout>
  )
}

export default HomePage;
