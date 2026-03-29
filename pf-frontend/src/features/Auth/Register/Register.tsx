import { useForm } from 'react-hook-form';
import './styles/Register.scss';
import { AuthService } from '../../../services/auth.service';
import { useState } from 'react';
import type { User } from '../../../models/user.model';

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
    <>
      <h2>Register Form</h2>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
          <input
              type="name"
              {...register("name", { required: true })}
              placeholder="Username"
          />
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
      {hasError && <p style={{ color: "red" }}>Inscription failed. Please check your information.</p>}
      {isSuccess && <p style={{ color: "green" }}>Inscription réussie. Vous pouvez maintenant vous connecter.</p>}
    </>
  )
}