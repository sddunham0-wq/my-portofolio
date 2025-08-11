import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-gray-600">
      © {new Date().getFullYear()} Alfi. All rights reserved.
    </footer>
  );
}
