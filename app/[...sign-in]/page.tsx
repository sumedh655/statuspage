import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-8 bg-white shadow-md rounded-lg">
        <h1 className="mb-6 text-2xl font-bold text-center">Sign In to Status Page</h1>
        <SignIn 
          path="/sign-in" 
          routing="path" 
          signUpUrl="/sign-up" 
          afterSignInUrl="/dashboard"
        />
      </div>
    </div>
  );
}


