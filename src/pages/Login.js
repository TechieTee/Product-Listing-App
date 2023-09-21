import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Perform login logic here (e.g., send data to a server)
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div style={{marginTop:'50px'}}>
    <div className="min-h-screen flex items-center justify-center bg-gray-50" >
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } w-full p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-200`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-[#b0960a] text-white py-2 px-4 rounded-md hover:bg-[#b0960a] focus:outline-none focus:ring focus:ring-blue-200"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div></div>
  );
};

export default Login;
