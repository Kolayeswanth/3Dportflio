import React, { Suspense, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Fox from "../model/Fox";
import Loader from "../components/Loader";
import { Canvas } from "@react-three/fiber";
import Alert from "../components/Alert";
import alerthook from "../hooks/alerthook";
import Footer from "../components/Footer";
const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("Idle");

  const { alert, showAlert, hideAlert } = alerthook();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("Idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("run");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "yeswanth kola",
          from_email: form.email,
          to_email: "kolayeswanth2005@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setTimeout(() => {
          hideAlert();
          setCurrentAnimation("Idle");
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Email sent successfully",
          type: "success",
        });
      })
      .catch((error) => {
        setIsLoading(false);
        setCurrentAnimation("Idle");
        console.error("Email sending error:", error);
        showAlert({ show: true, text: "Email sending failed", type: "danger" });
      });
  };

  return (
      
    <section className="relative flex lg:flex-row flex-col max-container h-[100%]">
    {alert.show && <Alert type={alert.type} text={alert.text} />}
      
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="text-4xl font-bold">Get in Touch</h1>
        <form
          ref={formRef}
          className="w-flex flex flex-col gap-6 mt-8"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="text-black-500 font-semibold">
            Name
            <input
              placeholder="Enter your name"
              type="text"
              id="name"
              name="name"
              className="input border-2 border-black-500 rounded-md p-2"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="email" className="text-black-500 font-semibold">
            Email
            <input
              placeholder="Enter your email address"
              type="email"
              id="email"
              name="email"
              className="input border-2 border-black-500 rounded-md p-2"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label htmlFor="message" className="text-black-500 font-semibold">
            Your Message
            <textarea
              rows={4}
              id="message"
              name="message"
              className="input border-2 border-black-500 rounded-md p-2"
              placeholder="Let me know how I can help you"
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            className="btn"
            type="submit"
            disabled={isLoading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? "Sending...." : "Send Message"}
          </button>
          
        </form>
      </div>
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 10],
            fov: 30,
            near: 0.1,
            far: 1000,
          }}
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <directionalLight intensity={2.5} position={[0, 0, 1]} />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
