import './App.css';
import MyPage from './myPage.png';
import MyPage2 from './news.png';
import MyPage3 from './messanger.png';
import MyPage4 from './calls.png';
import MyPage5 from './friends.png';
import Wagner from "./wagner.jpg"
import Postironia from "./postironia.jpg"
import Barbie from "./barbie.jpg"
import Britannia from "./britannia.jpg"
import Poroh from "./poroh.jpg"
import Mak from "./mak.jpg"

function Menus() {
  return (
    <div className="content">
      <div className="menus">
        <p className="txt"><img src={MyPage} className="logos"/>Моя страница</p>
        <p className="txt"><img src={MyPage2} className="logos"/>Новости</p>
        <p className="txt"><img src={MyPage3} className="logos"/>Мессенджер</p>
        <p className="txt"><img src={MyPage4} className="logos"/>Звонки</p>
        <p className="txt"><img src={MyPage5} className="logos"/>Друзья</p>
      </div>
      <div className="lenta">
        <div className="vas">
          <p className="text">Истории</p>
          <img src={Wagner} className="wagner2"/>
        </div>

        <div className="vas2">
          <p className="text2"><img src={Postironia} className="logo"/>Политическая постирония</p>
          <img src={Barbie} className="memas"/>
        </div>

        <div className="vas2">
          <p className="text2"><img src={Postironia} className="logo"/>Политическая постирония</p>
          <img src={Poroh} className="memas"/>
        </div>
        
        <div className="vas2">
          <p className="text2"><img src={Britannia} className="logo"/>Британская империя</p>
          <img src={Mak} className="memas"/>
        </div>

      </div>
      <div className="menuns">
        <div className="vas3">
          <p className="text3">Новости</p>
          <p className="text3">Рекомендации</p>
          <p className="text3">Поиск</p>
          <p className="text3">Реакции</p>
          <p className="text3">Обновления</p>
          <p className="text3">Комментарии</p>
        </div>
      </div>
    </div>
  )
}

export default Menus;