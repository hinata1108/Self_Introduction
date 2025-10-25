import Avatar from './assets/avatar.svg';
import X from './assets/X.svg';
import github from './assets/github.svg';
import insta from './assets/insta.svg';
import './main.css';
import './main.css';
import { Element } from 'react-scroll';

export default function Introduction() {
    const socialLinks = [
    { key: '1', Image: X, Alt: "X", Url: "https://twitter.com/G2Bwn" , Title:"X"},
    { key: '2', Image: github, Alt: "github", Url: "https://github.com/hinata1108/hinata", Title:"github"},
    { key: '3', Image: insta, Alt: "insta", Url: "https://www.instagram.com/tk___.11/",Title:"instagram"} ];
    return (
    <Element className="introduction" name="Introduction">
            <p>自己紹介</p>
      < div className="avatar_text">
            <img src={Avatar} alt="hinata's avatar" width="270" height="300" />
        <div className="text">
            <p>愛知県名古屋市にある名城大学農学部2年生です。</p>
<p>大学に入ってからプログラミングの勉強を始めました。</p>
<p>現在はフロントエンドとデータサイエンスを勉強しています。</p>
<p>またバイオインフォマティクス分野に興味があり、</p>
<p>12月に検定に挑戦する予定です。</p>
        </div>
      </div>
      <div className="social_links">
        {socialLinks.map((link) =>
          <a key={link.key} href={link.Url} target="_blank" rel="noopener noreferrer" title={link.Title}>
            <img src={link.Image} alt={link.Alt} width="40" height="40" />
          </a>
        )}
      </div>
    </Element>
    )}