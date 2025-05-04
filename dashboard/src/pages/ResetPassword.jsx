/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  resetPassword,
  clearAllForgotResetPassErrors,
} from "@/store/slices/forgotResetPasswordSlice";
import { getUser } from "@/store/slices/userSlice";
import SpecialLoadingButton from "./sub-components/SpecialLoadingButton";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { loading, error, message } = useSelector(
    (state) => state.forgotPassword
  );
  const { isAuthenticated } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleResetPassword = (password, confirmPassword) => {
    dispatch(resetPassword(token, password, confirmPassword));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllForgotResetPassErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
    if (message !== null) {
      toast.success(message);
      dispatch(getUser());
    }
  }, [dispatch, isAuthenticated, error, message]);

  return (
    <div className="min-h-screen w-full bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md space-y-6 text-white">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white">Reset Password</h1>
          <p className="text-sm text-slate-300">Set a new password</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white font-semibold">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="text-slate-900 placehoder-slate-600"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-white font-semibold">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="text-slate-900 placehoder-slate-600"
            />
          </div>
          {!loading ? (
            <Button
              onClick={() => handleResetPassword(password, confirmPassword)}
              className="w-full bg-blue-500 hover:bg-blue-700"
            >
              Reset Password
            </Button>
          ) : (
            <SpecialLoadingButton content={"Resetting Your Password"} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

