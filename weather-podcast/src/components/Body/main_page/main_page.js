
import './main.scss';


function Main() {
    return (
      <header className="main_page">
          <section className="page_content">
            <div className="page_logo">
                <div className="logo"></div>
                <h1 className="logo_text">Cat Weather Podcast</h1>
            </div>
            <div className="search_element">
                <div className="search_bar">
                    <div className="text">City Name</div>
                    <div className="search_logo"></div>
                </div>
                <div className="search_button">
                    <div className="text">FIND</div>
                </div>
            </div>
          </section>
      </header>
    );
  }
  
  export default Main;
  