import { CONTACT } from "../constants"
import { motion } from "framer-motion"


const Contact = () => {

  // eslint-disable-next-line react/prop-types
  const ContactLink = ({ email }) => {
    const handleClick = (e) => {
      e.preventDefault();
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
      window.open(gmailUrl, '_blank');
    };
  
    return (
      <a href="#" onClick={handleClick} className="border-b">{email}</a>
    );
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="my-10 text-center text-4xl"
        >Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >{CONTACT.address}</motion.p>
            <motion.p 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="my-4"
            >{CONTACT.phoneNo}</motion.p>
            < ContactLink email={CONTACT.email} />
        </div>
    </div>
  )
}

export default Contact