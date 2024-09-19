import { useState, useEffect, React } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { webUrl } from "../../Helper";

export const Login = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard");
    }
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${webUrl}/auth/login`, {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.token) {
        toast.success("You are now logged in");
        console.log(response.data);
        localStorage.setItem("user_id", response.data.user.id);
        localStorage.setItem("email", response.data.user.email);
        localStorage.setItem("name", response.data.user.name);
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        toast.error(
          response.data.detail || "Login failed. Please check your credentials."
        );
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(
          error.response.data.detail ||
            "An error occurred during login. Please try again later."
        );
      } else {
        toast.error("An error occurred during login. Please try again later.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-center bg-no-repeat page-bg">
      <div className="card max-w-[370px] w-full bg-brown">
        <form
          action="#"
          className="card-body flex flex-col gap-5 p-10"
          id="sign_in_form"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col gap-1">
            <label className="form-label text-gray-900">Email</label>
            <input
              className="input"
              name="email"
              placeholder="email@email.com"
              type="text"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="input" data-toggle-password="true">
              <input
                name="password"
                placeholder="Enter Password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <button
                className="btn btn-icon"
                data-toggle-password-trigger="true"
                disabled={isSubmitting}
              >
                <i className="ki-filled ki-eye-slash text-gray-500 hidden toggle-password-active:block"></i>
              </button>
            </label>
          </div>
          <label className="checkbox-group">
            <input
              className="checkbox checkbox-sm"
              name="remember"
              type="checkbox"
              defaultValue={1}
              disabled={isSubmitting}
            />
            <span className="checkbox-label">Remember me</span>
          </label>
          <button
            type="submit"
            className="btn btn-primary flex justify-center grow"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};
