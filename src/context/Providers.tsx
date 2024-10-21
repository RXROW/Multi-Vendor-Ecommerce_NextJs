"use client";
import { ourFileRouter } from "@/app/api/uploadthing/core";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Make sure to import the CSS for ToastContainer
import { extractRouterConfig } from "uploadthing/server";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { store } from "@/redux/store";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
      <SessionProvider>
      <Provider store={store}>{children}</Provider>
      </SessionProvider>
      <ToastContainer />
    </ThemeProvider>
  );
}
