import { useContext } from 'react';
import { Input } from 'antd';
import './Search.css';
import Context from '../context/context';


const { Search } = Input;
const SearchComponent = () => {

  const {setQuery} = useContext(Context)


  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>): void {
    if (e.target.value) setQuery(e.target.value);
  }

  return (
    <Search
        placeholder="input search text"
        onChange={onChangeHandler}
        className="search-bar"
     />
)
}

export default SearchComponent;