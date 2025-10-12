import Cokky from './assets/Cokky.svg';
import Fish from './assets/fish.svg';
import Picture from './assets/picture.svg';
import Umiusi from './assets/umiusi.svg';
import './main.css';


export default function Hobby(){
     const hobbies=[{"key":"1","Image":Cokky,"Alt":"Cokky"},
   {"key":"2","Image":Fish,"Alt":"fish"},
   {"key":"3","Image":Picture,"Alt":"Picture"},
   {"key":"4","Image":Umiusi,"Alt":"Umiusi"},
];
   return(


<div className="hobby">
   <div className="hobby-name">趣味</div>
 <div className="hobby-image">
{hobbies.concat(hobbies).concat(hobbies).map((Hobby) =>
  <img key={Hobby.key} src={Hobby.Image} alt={Hobby.Alt} width="400" height="400" />
)}
 </div>
</div>
   );
}
