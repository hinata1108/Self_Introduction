import './main.css';
import { useEffect, useRef, useState} from 'react';


export default function Experience (){
const ref =useRef();    
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setVisible(true);},
                { threshold: 0.6 });
        observer.observe(ref.current);
        return () => observer.disconnect();
        }, []);

     return(           
<div ref={ref} className={`Experience ${visible ? 'visible' : ''}`}>

    <p>経歴</p>
    <div className="Experience_box">
      <p>2024.3 愛知県立瑞陵高等学校卒業</p>
      <p>2024.4 名城大学入学</p>
      <p>2024.9 IdeaxTechに所属</p>
    </div>
 </div>
)
}