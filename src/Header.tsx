import './main.css';
import {Link} from 'react-scroll'

export default function Header() {
  return (
<header className="header">
    <p>About Me</p>
    <nav >
        <ul className="nav">
            <li><Link to="Introduction" smooth={true} duration={500} offset={-80}  onClick={() => console.log('リンク押された！')}>自己紹介</Link></li>
            <li><Link to="Experience" smooth={true} duration={500} offset={-80}>経歴</Link></li>
            <li><Link to="Hobby" smooth={true} duration={500} offset={-80}>趣味</Link></li>
            {/* <li><a href="/Activity">連絡先</a></li> */}
        </ul>
    </nav>
</header>
  )}