import {useEffect,useState} from 'react';
import { client } from './libs/client';
import './main.css';

export default function Blog() {
    // APIからデータ取得　データ保存と更新
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client.get({ endpoint: 'blog' })
        .then((res) => {
            setBlogs(res.contents);})
        .finally(() => {
            setLoading(false);
        });
    },[]);
    if (loading) {
        return <div>Loading...</div>;
    } else if (!loading) { 
        return <div>error</div>

   return (
    <div className="blog">
        <h2>ブログ</h2>
      {blogs.map((blog:any) => (
        <div key={blog.id} className="blog-item">
            <h3>{blog.title}</h3>
            <p>{blog.day}</p>
            <p>{blog.body}</p>
        </div>
      ))}
    </div>
    );
  }  
    }