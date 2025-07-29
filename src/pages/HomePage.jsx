import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Post from '../components/Post';

export default function HomePage() {
  const [user, setUser] = useState();
  const navigate = useNavigate();
  const [posts] = useState([
    { content: 'This is Post 1', likesNo: 20, loveNo: 5 },
    { content: 'This is Post 2', likesNo: 20, loveNo: 5 },
    { content: 'This is Post 3', likesNo: 20, loveNo: 5 },
    { content: 'This is Post 4', likesNo: 20, loveNo: 5 },
    { content: 'This is Post 5', likesNo: 20, loveNo: 5 },
  ]);

  useEffect(() => {
    // Protected Route

    let userIsLogin = localStorage.getItem('Active User');
    if (userIsLogin) {
      setUser(userIsLogin);
    } else {
      navigate('/login');
    }
  }, []);

  return (
    <div className="w-full h-full text-black flex flex-col gap-3">
      <h1>Welcome {user}</h1>

      <div className="container">
        {posts.map((el, index) => {
          return <Post key={index} content={el.content} loveNo={el.loveNo} likesNo={el.likesNo} />;
        })}
      </div>
      <button
        className="btn btn-error"
        onClick={() => {
          localStorage.removeItem('Active User');
          navigate('/login');
        }}
      >
        Log Out
      </button>
    </div>
  );
}

// props
// useState
// useRef
// useNavigate
