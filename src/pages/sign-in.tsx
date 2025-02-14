"use client";
"use no memo";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import GoogleButton from "@/components/GoogleButton";

const SigninValidation = z.object({
  email: z.string().email({
    message: "Email must be a valid email.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
});

const SignInForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {
    console.log(values);
  }
  return (
    <div className="flex flex-1 items-center justify-center overflow-x-">
      <div className="">
        <Form {...form}>
          <div className="flex-center flex-col sm:w-420 md:w-96">
            <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 ">
              Log in to your account
            </h2>
            <p className="small-medium md:base-regular text-light-3">
              Welcome back! Please enter your details
            </p>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="mt-4 flex w-full flex-col gap-5"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" className="shad-input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        className="shad-input"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="shad-button_primary">
                Sign in
              </Button>

              {/*<Button
          type="button"
          onClick={onGoogleSignIn}
          className="bg-white text-black"
        >
          Sign in with Google
        </Button>*/}
              <GoogleButton />
              <p className="text-small-regular mt-2 text-center text-light-2">
                Don't have an account?{" "}
                <Link
                  to={"/sign-up"}
                  className="text-small-semibold ml-1 text-primary"
                >
                  Sign up
                </Link>
              </p>
            </form>
            {/*<div className="mt-5">
        <GoogleButton onClick={onGoogleSignIn} type="dark" />
      </div>*/}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInForm;
