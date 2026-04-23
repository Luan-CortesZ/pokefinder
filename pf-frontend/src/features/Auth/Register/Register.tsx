import { AuthService } from '../../../services/auth.service';
import { useState } from 'react';
import type { User } from '../../../models/user.model';
import { useForm } from 'react-hook-form';
import './styles/Register.scss';
import { Button, TextField } from '@mui/material';

export default function Register() {
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>();

  const onSubmit = async (data: User) => {
    try {
      const user = await AuthService.register(data);
      console.log("Inscription réussie pour :", user.username);
      setIsSuccess(true);
    } catch (err: any) {
      setHasError(true);
    }
  };
  return (
    <div className="main">
      <div className="welcome">
        Welcome to PokéFinder! <br />
      </div>
      <div className="register">
        Create an account
        <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <TextField
              type="name"
              {...register("name", { required: true })}
              
              placeholder="Username"
          />
          <TextField
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
          />
          {errors.email && <span style={{ color: "red" }}>*Email* is mandatory</span>}

          <TextField
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
          />
          {errors.password && <span style={{ color: "red" }}>*Password* is mandatory</span>}

          <Button type="submit" style={{ backgroundColor: "#a1eafb" }} variant="contained">Register</Button>
        </form>
      </div>
    </div>
  )
}