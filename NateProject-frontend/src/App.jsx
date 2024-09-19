import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout } from "./Screen/DashboardLayout";
import { AppContext } from "./AppContext";
import { SettingPage } from "./Components/ProfilePageComponents/SettingPageComponents/SettingPage";
import { Chatbot } from "./Screen/Chatbot/Chatbot";
import { ChatbotLayout } from "./Screen/Chatbot/ChatbotLayout";
import { Profile } from "./Screen/Profile/Profile";
import { Login } from "./Screen/Auth/Login";
import { Dashboard } from "./Screen/Dashboard";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />

        <Route path="/" element={<DashboardLayout/>}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="chatbot" element={<ChatbotLayout />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/login" element={<Login/>} />
        <Route path="/setting" element={<SettingPage/>} />
        {/* <Route path="/chatbot" element={<ChatbotLayout/>} /> */}
      </Routes>
    </BrowserRouter>
  );
};
