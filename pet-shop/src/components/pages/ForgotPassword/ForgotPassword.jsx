import React from "react";
import ForgotPasswordForm from "../../organisms/ForgotPasswordForm/ForgotPasswordForm";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <ForgotPasswordForm />
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
