import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <> 
      <div className='container intro'>
        <h1 className='titel_logo'> MCN </h1>
      
        <p className='intro__text'> 
            ✨ Текст-заполнитель — это текст, который имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра
        </p>

        <div className='popular__post__container'>
          <div className='content__post'>
            <p className='content__text'>
              Имеет некоторые характеристики реального письменного текста, но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра
            </p>
            <a href='#' className='btn'> Читать подробнее </a>
          </div>
          <div className='img-post'>
             <img src={logo} alt='postImg'></img>
          </div>
        </div>

        <div className='list-posts'>
          <div className='post'>
              <img src={logo} alt='post' className='post_container'></img>
              <h2 className='titel_post'> характеристики реального письменного текста </h2>
              <p> но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра </p>
          </div>

          <div className='post'>
              <img src={logo} alt='post' className='post_container'></img>
              <h2 className='titel_post'> характеристики реального письменного текста </h2>
              <p> но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра </p>
          </div>
        </div>

        <div className='list-posts2'>
          <div className='post'>
            <img src={logo} alt='post' className='post_container'></img>
            <h2 className='titel_post'> характеристики реального письменного текста </h2>
            <p> но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра </p>
          </div>

          <div className='post'>
            <img src={logo} alt='post' className='post_container'></img>
            <h2 className='titel_post'> характеристики реального письменного текста </h2>
            <p> но является случайным набором слов или сгенерирован иным образом. Его можно использовать для отображения образца шрифтов, создания текста для тестирования или обхода спам-фильтра </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
