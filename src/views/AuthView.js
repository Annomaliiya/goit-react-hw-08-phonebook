import AuthForm from "../components/AuthForm/AuthForm";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "../redux/contacts/api";

export default function AuthView() {
  const [registerUser] = useRegisterUserMutation();
  const [loginUser, { error }] = useLoginUserMutation();
  return (
    <AuthForm loginUser={loginUser} error={error} registerUser={registerUser} />
  );
}
