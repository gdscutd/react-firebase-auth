import { firebaseAuth } from "@/lib/config";
import { Button } from "./ui/button";
import google from "/google.png";
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const GoogleButton = () => {
  const navigate = useNavigate();
  const onGoogleSignIn = () => {
    

    const provider = new GoogleAuthProvider();

    signInWithPopup(firebaseAuth, provider)
      .then(() => {
        console.log("Google sign-in successful");
        toast.success("Google sign-in successful");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Google sign-in failed", {
          description: error.message,
        });
      });
  };
  return (
    <div>
      <div className="mt-4 flex flex-row items-center justify-center gap-x-3">
        <div className="h-[1px] flex-1 bg-muted-foreground" />
        <div className="text-lg text-foreground">Or</div>
        <div className="h-[1px] flex-1 bg-muted-foreground" />
      </div>
      <Button
        className="mt-5 w-full"
        variant={"outline"}
        type="button"
        onClick={onGoogleSignIn}
      >
        <img src={google} alt="Google" className="mx-2 h-5 w-5" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
