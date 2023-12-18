import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Ghosts from "../models/Ghosts";
import Loader from "../components/Loader";
import { OrbitControls } from '@react-three/drei';
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
    const formRef = useRef(null);
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [isLoading, setLoading] = useState(false);
    const [currentAnimation, setAnimation] = useState("Take 001");
    const { alert, showAlert, hideAlert } = useAlert()
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        emailjs
            .send(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: "Alireza-portfolio",
                    from_email: form.email,
                    to_email: "alirezaesmaili6036@gmail.com",
                    message: form.message,
                },
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                setForm({ name: "", email: "", message: "" });
                showAlert({ show:true, text: 'Message sent successfully!', type: 'success'})
                setTimeout(()=>{
                    hideAlert()
                    setForm({ name:'', email:'', message:''})
                },[3000])
            })
            .catch((error) => {
                setLoading(false);
                console.log(error);
                showAlert({ show:true, text: 'We could not send the Message!', type: 'danger'})
            });
    };

    const handleFocus = () => {
        setAnimation("Take 001");
    };
    const handleBlur = () => {};

    return (
        <section className=" w-full h-full flex items-center parent" style={{ zIndex: 4, position:"absolute" }}>
            {alert.show && <Alert {...alert}/>}
            
                <div className=" left-10" style={{ zIndex: 3, position:"absolute" }}>
                    <h1 className="head-text">Let's Talk!</h1>
                </div>
            <div className=" right-10 form-width" style={{ zIndex: 3, position:"absolute" }}>
                <form
                    className=" flex flex-col gap-7"
                    onSubmit={handleSubmit}
                    style={{ paddingRight: '2.5rem', paddingLeft: '2.5rem', paddingTop: '2.5rem', paddingBottom: '2.5rem' }}
                >
                    <label className=" text-black-500 font-semibold">
                        Name
                        <input
                            type="text"
                            name="name"
                            className="input"
                            placeholder="Your Name"
                            required
                            value={form.name}
                            onChange={handleForm}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <label className=" text-black-500 font-semibold">
                        Email
                        <input
                            type="email"
                            name="email"
                            className="input"
                            placeholder="example@gmail.com"
                            required
                            value={form.email}
                            onChange={handleForm}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <label className=" text-black-500 font-semibold">
                        Your Message
                        <textarea
                            name="message"
                            rows={4}
                            className="input h"
                            placeholder="Let me know how I can help you"
                            required
                            value={form.message}
                            onChange={handleForm}
                            onBlur={handleBlur}
                            onFocus={handleFocus}
                        />
                    </label>
                    <button
                        className="btn"
                        type="submit"
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? "Sending..." : "Send Message"}
                    </button>
                </form>
                {/* <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"> */}
                {/* </div> */}
            </div>
            <div className=" contact-canvas ">
            <Canvas
                className=""
                camera={{
                    fov: 75,
                    near: 0.1,
                    far: 100,
                }}
            >
                <directionalLight intensity={2.5} position={[0, 0, 1]} />
                <Suspense fallback={<Loader />}>
                    <Ghosts
                        position={[0, -1, 0]}
                        scale={[1, 1, 1]}
                        currentAnimation={currentAnimation}
                    />
                </Suspense>
                <OrbitControls enableDamping={true} makeDefault={true} enableZoom={false}
            maxPolarAngle={Math.PI - Math.PI / 1.5} minPolarAngle={Math.PI / 2.5}
            /> 
            {/* minPolarAngle={Math.PI / 2.5} => for disabling orbit controls for +y axis */}
            </Canvas>
            
            </div>

        </section>
    );
};

export default Contact;
