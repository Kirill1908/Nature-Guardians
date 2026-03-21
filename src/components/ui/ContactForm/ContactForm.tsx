"use client";

import { useEffect, useState } from "react";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const validate = (data: FormData): FormErrors => {
  const errors: FormErrors = {};

  if (!data.firstName.trim()) errors.firstName = "First name is required";

  if (!data.lastName.trim()) errors.lastName = "Last name is required";

  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(data.email)
  ) {
    errors.email = "Invalid email address";
  }

  if (!data.subject.trim()) errors.subject = "Subject is required";

  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "email" && /[^a-zA-Z0-9._%+\-@]/.test(value)) { //does not allow the entry of characters other than those permitted
      return; 
    }

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setErrors({});
  };

  const inputBase ="w-full bg-transparent outline-none border-b pb-2 text-gray-800 text-sm placeholder:text-gray-800 placeholder:opacity-30 transition-colors duration-200";

  const inputClass = (field: keyof FormData) =>
    `${inputBase} ${errors[field] ? "border-red-400 focus:border-red-500" : "border-gray-300 focus:border-[#70C174]"}`;

  return (
    <div className="w-full max-w-3xl mx-auto px-5">
      <div
        className={`mb-8 p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm text-center transition-opacity duration-500 ${submitted ? "opacity-100" : "opacity-0"}`}
      >
        ✓ Your message has been sent successfully!
      </div>
      <form name="contact" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="firstName"
              className="block font-bold text-xs text-gray-800 leading-5 mb-2"
            >
              First Name*
            </label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="John"
              className={inputClass("firstName")}
            />
            <p className="mt-1 text-xs text-red-500 min-h-4">
              {errors.firstName || ""}
            </p>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="lastName"
              className="block font-bold text-xs text-gray-800 leading-5 mb-2"
            >
              Last Name*
            </label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Doe"
              className={inputClass("lastName")}
            />
            <p className="mt-1 text-xs text-red-500 min-h-4">
              {errors.lastName || ""}
            </p>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-xs text-gray-800 leading-5 mb-2"
            >
              Email*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="johndoe@gmail.com"
              className={inputClass("email")}
            />
            <p className="mt-1 text-xs text-red-500 min-h-4">
              {errors.email || ""}
            </p>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="subject"
              className="block font-bold text-xs text-gray-800 leading-5 mb-2"
            >
              Subject*
            </label>
            <input
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Your subject"
              className={inputClass("subject")}
            />
            <p className="mt-1 text-xs text-red-500 min-h-4">
              {errors.subject || ""}
            </p>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block font-bold text-xs text-gray-800 leading-5 mb-2"
            >
              Message*
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your Message"
              rows={5}
              className={`${inputClass("message")} resize-none border rounded-sm border-gray-300 p-3 ${errors.message ? "border-red-400" : "border-gray-300 focus:border-[#70C174]"}`}
            />
            <p className="mt-1 text-xs text-red-500 min-h-4">
              {errors.message || ""}
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center mt-4">
          <button
            type="submit"
            className="px-8 py-4 font-medium text-base bg-[#70C174] text-white rounded-sm hover:opacity-90 transition-colors"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
}
