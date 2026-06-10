import { AuthService } from '../../../services/auth.service';
import { useState } from 'react';
import type { User } from '../../../models/user.model';
import { useForm } from 'react-hook-form';
import './styles/Register.scss';
import { Button, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../components/AuthContext/AuthContext';

type RegisterFormValues = Pick<User, 'name' | 'email' | 'password'> & {
  confirmPassword: string;
};

export default function Register() {
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RegisterFormValues>();
  const { login } = useAuth();
  const navigate = useNavigate();
 
  const passwordValue = watch('password');

  const onSubmit = async (data: RegisterFormValues) => {
    setHasError(false);
    setIsSuccess(false);
    setErrorMessage('');
    setIsSubmitting(true);

    const { confirmPassword, ...registerPayload } = data;

    try {
      const user = await AuthService.register(registerPayload);
      console.log('Inscription reussie pour :', user.name);
      setIsSuccess(true);
      const response = await AuthService.login({ email: registerPayload.email, password: registerPayload.password });
      login(response.user);
      navigate('/profile'); 
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
      </div>

      <div className="register-card">
        <h2>Créer un compte</h2>
        <p className="subtitle"></p>

        {isSuccess && <div className="feedback success">Compte créé avec succès.</div>}
        {hasError && <div className="feedback error">{errorMessage}</div>}

        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label htmlFor="name">Nom d'utilisateur</label>
            <TextField
              id="name"
              type="text"
              {...register('name', {
                required: 'Nom d\'utilisateur est requis',
                minLength: { value: 3, message: 'Au moins 3 caractères' },
              })}
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
                required: 'Email est requis',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Veuillez entrer un email valide',
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
                required: 'Mot de passe est requis',
                minLength: { value: 6, message: 'Au moins 6 caractères' },
              })}
              variant="outlined"
              fullWidth
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          </div>

          <div className="field">
            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
            <TextField
              id="confirmPassword"
              type="password"
              {...register('confirmPassword', {
                required: 'Veuillez confirmer votre mot de passe',
                validate: (value) =>
                  value === passwordValue || 'Les mots de passe ne correspondent pas',
              })}
              variant="outlined"
              fullWidth
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            className="register-btn"
            disabled={isSubmitting}
            fullWidth
          >
            {isSubmitting ? 'Création du compte...' : 'S\'inscrire'}
          </Button>
        </form>

        <p className="login-link">
          Déjà inscrit ? <Link to="/login">Se connecter</Link>
        </p>
      </div>
    </div>
  );
}