import { useForm } from 'react-hook-form';
import './styles/Login.scss';
import type { LoginFormInputs } from '../../../models/login.model';
import { AuthService } from '../../../services/auth.service';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../components/AuthContext/AuthContext';
import { Button, TextField } from '@mui/material';

export default function Login() {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const { login } = useAuth();

  const onSubmit = async (data: LoginFormInputs) => {
    setHasError(false);
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await AuthService.login(data);
      login(response.user);
      navigate('/profile/pokédex');
    } catch (err: any) {
      setHasError(true);
      setErrorMessage(err?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-info">
        <h1>Pokefinder</h1>
      </div>

      <div className="login-card">
        <h2>Se connecter</h2>
        <p className="subtitle"></p>
        {hasError && <div className="feedback error">{errorMessage}</div>}

        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
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
              variant="outlined"
              fullWidth
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          </div>

          <div className="field">
            <label htmlFor="password">Mot de passe</label>
            <TextField
              id="password"
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'At least 6 characters' },
              })}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            className="login-btn"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>

        <p className="register-link">
          Nouveau ? <Link to="/register">Créer un compte</Link>
        </p>
      </div>
    </div>
  );
}