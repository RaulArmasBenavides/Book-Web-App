import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks';
import { startCreatingUserWithEmailPassword } from '../../store/auth';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [(value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  }

  return (
    <div className="p-4 animate-fadeIn animate-faster">
      <form onSubmit={onSubmit}>
        <div className="space-y-4">
          <input
            className={`input input-bordered w-full ${displayNameValid && formSubmitted ? 'input-error' : ''}`}
            placeholder="Nombre completo"
            type="text"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
          />
          {displayNameValid && formSubmitted && (
            <p className="text-red-500 text-xs italic">{displayNameValid}</p>
          )}

          <input
            className={`input input-bordered w-full ${emailValid && formSubmitted ? 'input-error' : ''}`}
            placeholder="correo@google.com"
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          {emailValid && formSubmitted && (
            <p className="text-red-500 text-xs italic">{emailValid}</p>
          )}

          <input
            className={`input input-bordered w-full ${passwordValid && formSubmitted ? 'input-error' : ''}`}
            placeholder="Contraseña"
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          {passwordValid && formSubmitted && (
            <p className="text-red-500 text-xs italic">{passwordValid}</p>
          )}

          <div className="pt-2">
            {errorMessage && (
              <div className="alert alert-error">
                {errorMessage}
              </div>
            )}

            <button
              className={`btn btn-primary w-full ${isCheckingAuthentication && 'loading'}`}
              type="submit"
              disabled={isCheckingAuthentication}>
              Crear cuenta
            </button>
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <span className="mr-1">¿Ya tienes cuenta?</span>
          <RouterLink className="link" to="/auth/login">
            Ingresar
          </RouterLink>
        </div>
      </form>
    </div>
  )
}
