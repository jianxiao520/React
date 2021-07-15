import Home_ from '../pages/home';
import SignIn_ from '../pages/signin';
import SignUp_ from '../pages/signup';
import Error_ from '../pages/error';
import ActivationEmail_ from '../pages/ActivationEmail';
import QuestionInfo_ from '../pages/QuestionInfo';

export default [
    { path: "/", name: "App", component: Home_ },
    { path: "/signup", name: "Home", component: SignUp_ },
    { path: "/signin", name: "Login", component: SignIn_ },
    { path: "/404", name: "error", component: Error_ },
    { path: "/activationAccount", name: "ActivationEmail", component: ActivationEmail_ },
    { path: "/QuestionInfo", name: "QuestionInfo", component: QuestionInfo_ },
    
];