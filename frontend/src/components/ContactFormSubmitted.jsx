import PropTypes from "prop-types";

function ContactFormSubmitted({ onClose }) {
  return (
    <>
      <div className="message flex justify-center items-center bg-gray-800 w-full z-999 h-screen relative">
        <h2 className="text-4xl font-bold text-center text-slate-200">
          Thank You! Your message has been sent.
        </h2>
        <button
          onClick={onClose}
          className="text-2xl font-bold absolute top-10 right-10"
        >
          X
        </button>
      </div>
    </>
  );
}

ContactFormSubmitted.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ContactFormSubmitted;
