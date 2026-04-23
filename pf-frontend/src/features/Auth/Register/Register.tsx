import { AuthService } from '../../../services/auth.service';
import { useState } from 'react';
import type { User } from '../../../models/user.model';
import { useForm } from 'react-hook-form';
import './styles/Register.scss';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

type RegisterFormValues = Pick<User, 'name' | 'email' | 'password'>;

export default function Register() {
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();

  const onSubmit = async (data: RegisterFormValues) => {
    setHasError(false);
    setIsSuccess(false);
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const user = await AuthService.register(data);
      console.log('Inscription reussie pour :', user.username);
      setIsSuccess(true);
      reset();
    } catch (err: any) {
      setHasError(true);
      setErrorMessage(err?.message || 'Unable to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-info">
        <h1>Pokefinder</h1>
        <p>Build your trainer account and start your journey.</p>
      </div>

      <div className="register-card">
        <h2>Create account</h2>
        <p className="subtitle">Join the community in less than a minute.</p>

        {isSuccess && <div className="feedback success">Account created successfully.</div>}
        {hasError && <div className="feedback error">{errorMessage}</div>}

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="name">Username</label>
            <TextField
              id="name"
              type="text"
              {...register('name', {
                required: 'Username is required',
                minLength: { value: 3, message: 'At least 3 characters' },
              })}
              placeholder="Ash Ketchum"
              variant="outlined"
              fullWidth
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </div>

          <div className="field">
            <label htmlFor="email">Email</label>
            <TextField
              id="email"
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email',
                },
              })}
              placeholder="trainer@pokefinder.com"
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <TextField
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'At least 6 characters' },
              })}
              placeholder="Enter a secure password"
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            className="register-btn"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Creating account...' : 'Register'}
          </Button>
        </form>

        <p className="login-link">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}