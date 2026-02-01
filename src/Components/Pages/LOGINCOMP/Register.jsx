import React, { useState } from 'react';
import { User, Mail, Lock, Stethoscope, ChevronRight, Activity } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'patient'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Submit:", formData);
  };

  return (
    <div className="min-h-screen relative top-10 md:top-16 bg-black/50 flex flex-col md:flex-row">
      
      {/* Left Side: Graphical/Branding Section */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600/50 p-12 flex-col justify-between text-white relative overflow-hidden">
        {/* Abstract Background "Graphic" */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400 rounded-full opacity-30 blur-3xl"></div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-2xl font-bold mb-8 font-alluser">
            <Activity className="w-8 h-8" />
            <span>CMMH HEALTH CARE</span>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Streamlining care <br /> for everyone.
          </h1>
          <p className="mt-6 text-blue-100 text-lg max-w-md">
            Join our secure network connecting patients, doctors, and healthcare staff in real-time.
          </p>
        </div>

        <div className="relative z-10 p-6 bg-blue-700/30 rounded-2xl backdrop-blur-sm border border-white/10">
          <p className="italic text-blue-50">
            "This platform has completely changed how we manage patient consultations."
          </p>
          <p className="mt-4 font-semibold">— Dr. Aris Thorne</p>
        </div>
      </div>

      {/* Right Side: Form Section */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h2 className="text-3xl font-alluser text-white">Create Account</h2>
            <p className="text-gray-300 mt-2">Please enter your details to register.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Username */}
            <div className="space-y-1">
              <label className="text-sm  font-semibold text-gray-700">Username</label>
              <div className="relative">
                <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="text" name="username" required placeholder="johndoe"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input 
                  type="email" name="email" required placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  onChange={handleChange} 
                />
              </div>
            </div>

            {/* Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" name="password" required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange} 
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-700">Confirm</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" name="confirmPassword" required
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={handleChange} 
                  />
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className="space-y-1">
              <label className="text-sm font-semibold text-gray-700">Account Role</label>
              <div className="relative">
                <Stethoscope className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <select 
                  name="role" 
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg font-alluser focus:ring-2 focus:ring-blue-500 outline-none appearance-none cursor-pointer"
                  onChange={handleChange}
                >
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                  <option value="staff">Staff</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              className="group w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-bold flex items-center justify-center gap-2"
            >
              Get Started
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account? <a href="/login" className="text-blue-600 font-semibold hover:underline">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;