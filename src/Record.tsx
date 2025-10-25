import './main.css';
import { useEffect, useRef, useState} from 'react';
import { Element } from 'react-scroll';

export default function Experience (){
const ref =useRef<HTMLDivElement>(null);    
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) setVisible(true);},
                { threshold: 0.6 });
        if (ref.current) {                    
          observer.observe(ref.current);}
        return () => observer.disconnect();
        }, []);

     return(           
<div ref={ref} >
  <Element className={`Experience ${visible ? 'visible' : ''}`} name="Experience">

    <p>経歴</p>
    <div className="Experience_box">
      <p>2024.3 愛知県立瑞陵高等学校卒業</p>
      <p>2024.4 名城大学入学</p>
      <p>2024.9 IdeaxTechに所属</p>
    </div>
  </Element>
 </div>
)
}