import { ContactForm } from "@/components/forms/contact-me-form";
import React from "react";

export default function ContactPage() {
  return (
    <div className="container mt-2.5 py-5 overflow-y-scroll">
      <div className="pb-10 pt-4 md:flex md:h-hero md:flex-col md:items-center md:justify-center md:py-0">
        <ContactForm />
      </div>
    </div>
  );
}
