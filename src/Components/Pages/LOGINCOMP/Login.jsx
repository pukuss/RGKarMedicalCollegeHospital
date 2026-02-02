import React, { useState } from 'react';
import { Mail, Lock, LogIn, ChevronRight, Activity, Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", formData);
    // Add your login logic/API call here
  };

  return (
    <div className="min-h-screen bg-black/50 flex overflow-hidden relative top-10 md:top-16">
      
      {/* Left Side: Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 md:p-20">
        <div className="w-full max-w-md">
          {/* Logo for Mobile */}
          <div className="flex items-center gap-2 mb-8 lg:hidden">
            <Activity className="w-8 h-8 text-blue-600" />
            <span className="text-2xl font-bold">CMMH Healt Care</span>
          </div>

          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-white mb-2 ">Welcome Back</h2>
            <p className="text-gray-500">Please enter your details to sign in.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Email Field */}
            <div className="relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 block ml-1">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type="email" name="email" required placeholder="doctor@hospital.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="relative">
              <div className="flex justify-between items-end mb-1">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">Password</label>
                <a href="#" className="text-xs font-semibold text-blue-600 hover:underline">Forgot?</a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input 
                  type={showPassword ? "text" : "password"} 
                  name="password" required placeholder="••••••••"
                  className="w-full pl-11 pr-12 py-3 bg-gray-50/50 border border-gray-200 rounded-xl  focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                  onChange={handleChange} 
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center gap-2 ml-1">
              <input 
                type="checkbox" name="rememberMe" id="rememberMe"
                className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 cursor-pointer"
                onChange={handleChange}
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-600 cursor-pointer select-none">
                Keep me logged in
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all font-bold shadow-lg shadow-blue-100 flex items-center justify-center gap-2 mt-4"
            >
              Sign In
              <LogIn className="w-5 h-5" />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            New to HealthPort? <a href="/register" className="text-blue-600 font-bold hover:underline">Create Account</a>
          </p>
        </div>
      </div>

      {/* Right Side: GIF & Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 bg-blue-600/50 relative flex-col items-center justify-center p-12 overflow-hidden">
        
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-20 -mb-20 blur-2xl"></div>

        <div className="relative z-10 w-full max-w-md text-center">
          <img 
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGkxZ3ZhMWtmZnVlc2Ixemp5aG90NDI3OGJvb3ZsZzNmNTZ4MG1qcSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/66M6ZwJkTLYikvhrqZ/giphy.gif" 
            alt="Secure Login Animation"
            className="rounded-3xl shadow-2xl border-4 border-white/20 mb-10 w-full aspect-square object-cover"
          />
          
          <h1 className="text-3xl font-bold text-white mb-4">Secure Health Access</h1>
          <p className="text-blue-100 font-medium">
            Access your medical records and appointments with industry-leading encryption.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Login;