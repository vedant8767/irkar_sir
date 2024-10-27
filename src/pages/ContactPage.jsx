// 
import { useEffect, useState } from 'react';
import '../css/ContactPage.css';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  useEffect(()=>{
    var navbar = document.querySelector('.navbar');
    document.querySelectorAll('.btn').forEach(function(button) {
      button.style.color = 'white';
  });
  document.querySelector('.navbar h1').style.color = 'white';
  navbar.style.backgroundColor = 'black';


// Set the position property to an empty string
navbar.style.position = 'relative';
  },[])
  const [formError, setFormError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    console.log('Processing.....');
    try {
      const response = await fetch('api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        reset();
        setFormError('');
      } else {
        console.error('Form submission failed');
        setFormError('Form Submission Failed, Try Again!');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setFormError(error);
    }
  };

  return (
    <div className="main_contact">
      <div className="contact_container" data-aos="zoom-in">
      <div className="top_section">
        <h1>LETS'S CONNECT</h1>
        <h2>WITH US!</h2>
      </div>
      <div className="mid_section">
        <div className="mid_left">
          <div className="icon_container">
            <div className="icon_circle">
              <i className="fa fa-phone fa-xs" aria-hidden="true"></i>
            </div>
            <p>+123-456-7890</p>
          </div>
          <div className="icon_container">
            <div className="icon_circle">
              <i className="fa fa-globe fa-xs" aria-hidden="true"></i>
            </div>
            <p>www.irkarmahadev.com</p>
          </div>
          <div className="icon_container">
            <div className="icon_circle">
              <i className="fa fa-envelope fa-xs" aria-hidden="true"></i>
            </div>
            <p>hello@real123@gmail.com</p>
          </div>
          <div className="icon_container">
            <div className="icon_circle">
              <i className="fa fa-map-marker fa-xs" aria-hidden="true"></i>
            </div>
            <p>123 Anywhere vasai west</p>
          </div>
        </div>
        <div className="mid_right">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              {...register('name', {
                required: 'Name is required',
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Name should not contain numbers or special characters',
                },
              })}
            />
            {errors.name && <span className="error">{errors.name.message}</span>}

            {/* Email Input */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && <span className="error">{errors.email.message}</span>}

            {/* Message Input */}
            <textarea
              name="message"
              placeholder="Message"
              {...register('message', {
                required: 'Message is required',
              })}
            ></textarea>
            {errors.message && <span className="error">{errors.message.message}</span>}

            {/* Submit Button */}
            <button type="submit">Send</button>
          </form>

          {/* Global Form Submission Error */}
          {formError && <h3 className="form-error">{formError}</h3>}
        </div>
      </div>
      <div className="bottom_section">
        <h1>We're here to assist you on your website journey!</h1>
      </div>
    </div>
    </div>
  );
}
