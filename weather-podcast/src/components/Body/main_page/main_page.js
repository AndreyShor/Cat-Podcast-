
import { useRef } from 'react';
import './main.scss';
import { useNavigate } from 'react-router-dom';



function Main() {
    const searchInput = useRef(null);
    const navigate = useNavigate();

    const submitSearch = () => {
        const inputValue = searchInput.current.value;
        console.log(inputValue);
        searchInput.current.value = '';
        navigate('search');

    } 

    return (
      <header className="main_page">
          <section className="page_content">
            <div className="page_logo">
                <img src={require('./../../../public/img/emoticon.png')} className="logo" alt='logo'/>
                <h1 className="logo_text">Cat Weather Podcast</h1>
            </div>
            <div className="search_element">
                <input type="text"  placeholder="City Name" ref={searchInput} className="searchBar"/>
                <div className="search_button" type="submit" onClick={submitSearch}>
                    <div className="text">FIND</div>
                </div>
            </div>
          </section>
      </header>
    );
  }
  
  export default Main;
  