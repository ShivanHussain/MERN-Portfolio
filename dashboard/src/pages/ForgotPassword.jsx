/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { clearAllUserErrors } from "@/store/slices/userSlice";
import { forgotPassword } from "@/store/slices/forgotResetPasswordSlice";
import { toast } from "react-toastify";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleForgotPassword = (email) => {
    dispatch(forgotPassword(email));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
    if (message !== null) {
      toast.success(message);
    }
  }, [dispatch, isAuthenticated, error, message]);

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center px-4 ">
      <div className="w-full max-w-md space-y-6 text-white">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Forgot Password</h1>
          <p className="text-sm text-slate-300">
            Enter your email to request a password reset
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="font-bold text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-slate-900 placehoder-slate-600"
            />
          </div>
          <div className="flex justify-end">
            <Link
              to="/login"
              className="text-sm text-blue-400 hover:underline"
            >
              Remember your password?
            </Link>
          </div>
            {loading?(
              <SpecialLoadingButton content={"Forget Password"}/>
            ):(
              <Button
              onClick={() => handleForgotPassword(email)}
              className="w-full bg-blue-700 hover:bg-blue-900"
            >
              Forgot Password
            </Button>
            )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;