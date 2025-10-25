import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function Signup() {
  return (
    <div className="flex w-full h-screen items-center justify-center gap-20">
      {/* Left side - Image */}
      <div className="w-fit h-full flex items-center justify-center">
        <img
          src="/loginBanner.png"
          className="w-[100%] h-[90%] object-cover rounded-2xl"
          alt="Login Banner"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-1/4 flex flex-col items-center justify-center gap-3">
        <div className="text-center mb-4">
          <h1 className="text-3xl font-bold">Sign to your account</h1>
          <p className="text-gray-500">
            Welcome back! Please enter your details.
          </p>
        </div>

        <div className="w-full space-y-5">

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <Input type="text" placeholder="Enter Email" className="h-13 bg-white w-full"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <Input type="password" placeholder="Enter Password" className="h-13 bg-white w-full"/>
          </div>
          <p>Must be at least 8 characters.</p>
          <Button className="w-full h-13 bg-[#1D3557] hover:bg-[#1D3557]">Log in</Button>
          <div className="flex items-center gap-2">
            <div className="border w-full"></div>
            <p>OR</p>
            <div className="border w-full"></div>
          </div>
          <p className="text-center">Already have an account?<a href="/" className="underline text-[#0E1680]">Sign up</a></p>
        </div>
      </div>
    </div>
  )
}

export default Signup