import { useState, useEffect } from "react";
import {Post} from './types/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setPosts(json);
  }


 return(
  
   <div className="p-5"> 

    {loading &&
      <div>Carregando...</div>
    }

    {!loading && posts.length > 0 &&
      <>
        <div>Total de posts: {posts.length}</div>    
        <div>
          {posts.map((item, index) =>(
            <div key={index} className="my-4">
              <h4 className="font-bold">{item.title}</h4>
              <small>#{item.id} - Usuário: {item.userId}</small>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </>
    }

    {!loading && posts.length === 0 &&
      <div>Não há posts para exibir.</div>
    }
   </div>
  );
}

export default App
