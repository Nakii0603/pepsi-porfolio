"use client";

import Navbar from "./components/Navbar";
import { ChangeLanguegeProvider } from "./ChangeLanguegeProvider";

export default function Page() {
  return (
    <div className="bg-black">
      <ChangeLanguegeProvider>
        <Navbar />

        <Footer />
      </ChangeLanguegeProvider>
    </div>
  );
}
