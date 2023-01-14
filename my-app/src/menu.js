import './App.css';
import VK from './vk.png';
import Bell from "./bell.png"
import Wagner from "./wagner.jpg"

function Menu() {
  return (
    <div className="menu">
        <img src={VK} className="VK"/>
        <h3 className="VKT">ВКОНТАКТЕ</h3>
        <input className='search' />
        <img src={Bell} className="bell"/>
        <img src={Wagner} className="wagner"/>
    </div>
  )
}

export default Menu;