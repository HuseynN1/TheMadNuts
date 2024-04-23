"use client"
import { useRouter } from 'next/navigation';

const Button = () => {
  const router = useRouter();

  const handleSignInClick = () => {
    router.push('/signin'); // Replace '/signin' with the actual path of your sign-in page
  };

  return (
    <button className="h-12 rounded-lg bg-white font-bold px-5" onClick={handleSignInClick}>
      Sign In
    </button>
  );
};

export default Button;
