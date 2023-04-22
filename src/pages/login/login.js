import { userLogin, googleLogin } from '../../firebase/auth.js';
import { errorMessages, validationLogin } from '../../firebase/error.js';
import iconeBtnGoogle from '../../assets/imagens/google.png';
import LogotipoQA from '../../assets/imagens/logo.png';

export default () => {
  const loginContainer = document.createElement('div');

  const loginScreen = `
  <section id='desktop'> 
    <section id='login-content-desktop'>
      <div id='background-orange'> <br> <br>
        <h2 id='welcome'> Bem vindo (a) ! <br> <br> </h2> <hr id='line'> <br> <br> <br> <br>
           <p id='quality'> "A sua qualidade de vida é como um <span>bumerangue</span>, precisa ter movimento. <br> Todas as ações que você lançar, <br> voltarão em sua direção ainda mais fortes." </p> <br> <br>
      <h2 id='actions'> Melhore suas ações, <br> pratique atividade física! </h2><br><br><br><br><br><br>
       </div>
      </section> 
      <section class='login-container'>
      <img src='${LogotipoQA}' id='login-logo' alt='Logotipo QA- Qualidade de ações'>
      <input class='padding-inputs' id='email' name='email' type='email' placeholder='E-MAIL' required/> 
      <input class='padding-inputs' id='password' name='password' type='password' placeholder='SENHA' > 
      <button id='enter-button'> ENTRAR </button>
      <p id='error-login'> </p><br>
      <p id='or-google'>ou</p> <br>
      <figure>
      <p id='login-google'>Faça login com sua conta </p><img src='${iconeBtnGoogle}' alt='Imagem google' id='image-google'> </figure><br>
      <p id='google-account-login'> Não tem uma conta? </p>
      <span id='login-register'>CADASTRE-SE </span>
      <footer> <strong> © BOOMERANG </strong> </footer>
    </section>
    </section>
  `;
  loginContainer.innerHTML = loginScreen;

  const buttonEnter = loginContainer.querySelector('#enter-button');
  const buttonGoogle = loginContainer.querySelector('#image-google');
  const inputEmail = loginContainer.querySelector('#email');
  const inputPassword = loginContainer.querySelector('#password');
  const errorMessage = loginContainer.querySelector('#error-login');
  const signUp = loginContainer.querySelector('#login-register');

  buttonEnter.addEventListener('click', (event) => {
    event.preventDefault();
    const validateLogin = validationLogin(inputEmail.value, inputPassword.value);
    if (validateLogin === '') {
      userLogin(inputEmail.value, inputPassword.value)
        .then(() => {
          window.location.hash = '#feed';
        })
        .catch((error) => {
          errorMessage.innerHTML = errorMessages(error);
        });
    } else {
      errorMessage.innerHTML = validateLogin;
    }
  });

  buttonGoogle.addEventListener('click', (event) => {
    event.preventDefault();
    googleLogin()
      .then(() => {
        window.location.hash = '#feed';
      })
      .catch((error) => error);
  });

  signUp.addEventListener('click', () => {
    window.location.hash = '#register';
  });

  return loginContainer;
};
