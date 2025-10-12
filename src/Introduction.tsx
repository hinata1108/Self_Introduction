import Avatar from './assets/avatar.svg';
// import X from './assets/X.svg';
// import github from './assets/github.svg';
// import insta from './assets/insta.svg';
import './main.css';

export default function Introduction() {
    return (
    <div className="introduction">
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
    </div>
    )}