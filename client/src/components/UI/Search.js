import { Input, Space } from 'antd';
import './Search.css';

//TODO: return different types
//of inputs depending on type

const { Search } = Input;
const SearchComponent = (props) => {

  function onSearch(){}

  return (
    <Search
        placeholder="input search text"
        onSearch={onSearch}
        className="search-bar"
     />
)
}

export default SearchComponent;