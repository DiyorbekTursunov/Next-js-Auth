import { CardWrapper } from "./card-wrapper"


const AuthForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      showSocial
    >
      Login form
    </CardWrapper>
  )
}

export default AuthForm
