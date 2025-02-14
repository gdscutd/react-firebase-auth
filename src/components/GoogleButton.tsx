import { Button } from "./ui/button";
import google from "/google.png";

const GoogleButton = () => {
  const handleGoogleLogin = () => {};

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
        onClick={handleGoogleLogin}
      >
        <img src={google} alt="Google" className="mx-2 h-5 w-5" />
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleButton;
