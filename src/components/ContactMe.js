import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import { useForm, ValidationError } from "@formspree/react";

function ContactInfo() {
  const [state, handleSubmit] = useForm("mzbqbjyk");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [reasonForMessage, setReasonForMessage] = useState("employment");
  // const [message, setMessage] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  if (state.succeeded) {
    return <p>Thank you for your message! I will reply as soon as I can.</p>;
  }

  return (
    <div className="sections">
      <h1 className="text-center">Contact me</h1>
      <div className="contact-page vh-100 d-flex flex-column ">
        <form
          className="contactForm d-flex flex-column  w-100"
          onSubmit={handleSubmit}
        >
          <input
            placeholder="Please enter your name"
            className="form-field p-2"
            id="name"
            type="name"
            name="name"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input
            placeholder="Please enter your email"
            className="form-field p-2"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <select className="p-2  form-field" id="reason" name="reason">
            {/* refers to reasonForMessage */}
            <option value="employment">
              I am reaching out about an employment opportunity
            </option>
            <option value="question">
              I am reaching out with a specific question
            </option>
            <option value="networking">
              I am reaching out for networking purposes
            </option>
            <option value="other">Other</option>
          </select>
          <ValidationError
            prefix="Reason"
            field="reason"
            errors={state.errors}
          />

          <textarea
            placeholder="Please enter your message"
            className="form-field p-2"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
        </form>
        {/* {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )} */}
      </div>
    </div>
  );
}

// function ContactInfo() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [reasonForMessage, setReasonForMessage] = useState("employment");
//   const [message, setMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (name === "") {
//       setErrorMessage("Please enter your name");
//       return;
//     } else if (!validateEmail(email)) {
//       setErrorMessage(
//         "Email not valid, please enter a valid email (xxxxxx@xxxxx.xxx)"
//       );
//       return;
//     } else if (message === "") {
//       setErrorMessage(`I'd love to hear from you! Please enter a message!`);
//       return;
//     } else {
//       setErrorMessage("");
//     }
//     setName("");
//     setEmail("");
//     setReasonForMessage("employment");
//     setMessage("");
//     alert(`
//     Name: ${name}
//     Email: ${email}
//     Reason for message: ${reasonForMessage}
//     Message: ${message}`);
//   };

//   return (
//     <div className="sections">
//       <h1 className="text-center">Contact me</h1>
//       <div className="contact-page vh-100 d-flex flex-column ">
//         <form className="contactForm d-flex flex-column  w-100" action="https://formspree.io/f/mzbqbjyk" method="POST">
//           <input
//             className="form-field p-2"
//             name="name"
//             placeholder="Please enter your name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />

//           <input
//             className="p-2  form-field"
//             name="email"
//             placeholder="Please enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <select
//             className="p-2  form-field"
//             value={reasonForMessage}
//             onChange={(e) => setReasonForMessage(e.target.value)}
//           >
//             {/* refers to reasonForMessage */}
//             <option value="employment">
//               I am reaching out about an employment opportunity
//             </option>
//             <option value="question">
//               I am reaching out with a specific question
//             </option>
//             <option value="networking">
//               I am reaching out for networking purposes
//             </option>
//             <option value="other">Other</option>
//           </select>
//           <textarea
//             className="p-2  form-field"
//             name="message"
//             placeholder="Please enter your message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <button
//             className="p-2  form-field"
//             type="button"
//             onClick={handleFormSubmit}
//           >
//             Send
//           </button>
//         </form>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

export default ContactInfo;
