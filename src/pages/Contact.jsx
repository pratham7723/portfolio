import React, { Suspense, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';


const Contact = () => {
  const formRef = useRef();
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [isloading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // TO KEEP TRACK IF USER IS TYPING OR NOT
  const handleFocus = () => setCurrentAnimation('walk');

  // CALLED ONCE CLICKED OUT
  const handleBlur = () => setCurrentAnimation('idle');

  // HANDLE SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation('hit');

    emailjs.send(

      // YOUR SERVICE ID
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,

      // YOUR TEMPLATE ID
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,

      // YOUR TEMPLATE VARIABLES
      {
        from_name: form.name,
        to_name: 'Zeltrax',
        from_email: form.email,
        to_email: 'swapnil05029@gmail.com',
        message: form.message
      },
      // YOUR PUBLIC KEY
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);

      // SHOW ALERT
      showAlert({
        show: true,
        text: 'Message Sent Successfully',
        type: 'success'
      });

      // TO STOP THE RUNNING ANIMATION AFTER SOMETIME
      setTimeout(() => {
        setCurrentAnimation('idle');
        hideAlert();
        // RESET THE FORM
        setForm({ name: '', email: '', message: '' });
      }, [3000]);


    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimation('idle');

      // SHOW ALERT
      showAlert({
        show: true,
        text: 'I didn\'t receive your message',
        type: 'danger'
      });

      console.log(error);
    });
  };


  return (
    <section className='relative flex lg:flex-row flex-col max-container'>
      {
        alert.show && (
          <Alert {...alert} />
        )
      }

      {/* TEMPORARY TO STYLE THE ALERT */}
      {/* <Alert {...alert} /> */}

      <div className='flex-1 flex flex-col min-w-[50%]'>
        <h1 className='head-text'>Get in Touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full mt-14 flex flex-col gap-7'>

          {/* NAME */}
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type="text"
              name='name'
              className='input'
              placeholder='Enter your name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* EMAIL */}
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type="email"
              name='email'
              className='input'
              placeholder='example@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* MESSAGE */}
          <label className='text-black-500 font-semibold'>
            Message
            <textarea

              name='message'
              className='textarea'
              placeholder='Let me know how can I help you'
              rows={4}
              style={{ resize: 'none' }}
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type='submit'
            className='btn'
            disabled={isloading}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isloading ? 'Sending...' : 'Send Message'}
          </button>


        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />}>
            <Fox
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
              currentAnimation={currentAnimation}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact;