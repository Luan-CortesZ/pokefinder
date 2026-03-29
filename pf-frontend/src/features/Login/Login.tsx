import { useForm } from 'react-hook-form';
import './styles/Login.scss';
import type { LoginFormInputs } from '../../models/login.model';
import { AuthService } from '../../services/auth.service';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Login() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const user = await AuthService.login(data);
      console.log("Connexion réussie pour :", user.username);
      navigate('/profile/pokédex');
    } catch (err: any) {
      setHasError(true);
    }
  };
  return (
    <>
      <h2>Login Form</h2>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
          />
          {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

          <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
          />
          {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

          <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
      </form>
      {hasError && <p style={{ color: "red" }}>Login failed. Please check your credentials.</p>}
    </>
  )
}