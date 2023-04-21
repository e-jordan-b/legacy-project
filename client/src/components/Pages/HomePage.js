import EventList from "../EventList";
import Layout from "../Layout/Layout";
import SearchComponent from "../UI/Search";

const HomePage = () => {

  return (
    <Layout>
      <SearchComponent />
      <EventList />
    </Layout>
  )
}

export default HomePage;
