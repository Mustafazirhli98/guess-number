import './App.css';
import { GuessNumber } from './components/GuessNumber.jsx';
function App() {


  return (
    <div className="App">
      <GuessNumber />
    </div>
  );
  // GuessNumber.jsx isimli component'in içerisinde yalnızca jsx yapı bulunmakta. Aynı zamanda state'ler de burada oluşturuldu.
  //enums dosyası içinde kullanıcıya vereceğim bazı dinamik bildirimleri sakladım ve freeze ettim. Böylelikle yanlışlıkla değiştirilmesini önledim.
  //methods dosyamda ise GuessNumber fonksiyonlarımı oluşturdum. GuessNumber component'inden state'leri bu fonksyionlara parametre olarak gönderdim.Böylelikle kod karmaşasının önüne geçtim.
}
export default App;

