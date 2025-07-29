import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();
  // ref
  const emailInput = useRef();
  const passwordInput = useRef();

  const handleLogin = () => {
    event.preventDefault();
    let email = emailInput.current.value;
    let password = passwordInput.current.value;
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let userIsHere = users.some((el) => {
      return el.email == email && el.password == password;
    });

    if (userIsHere == true) {
      localStorage.setItem('Active User', email);
      toast.success('Login success');
      navigate('/');
    } else {
      toast.error('Wrong Email or Password');
    }
  };

  useEffect(() => {
    let isActive = localStorage.getItem('Active User');
    let users = localStorage.getItem('users');
    if (!users) {
      localStorage.setItem('users', JSON.stringify([{ email: 'ali@icloud.com', password: 123456 }]));
    }
    if (isActive) {
      navigate('/');
    }
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center">
      <form onSubmit={handleLogin} className="bg-white w-[90%] md:w-[450px] p-3 rounded shadow flex flex-col gap-3">
        <p className="text-gray-900 font-bold">Welcome Back , Please Login</p>
        <input ref={emailInput} type="text" placeholder="Enter you email" className="input w-full" />
        <input ref={passwordInput} type="text" placeholder="Enter you password" className="input w-full" />
        <button className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
}
