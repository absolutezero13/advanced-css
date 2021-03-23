import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};

const modal = {
  hidden: {
    y: "-110vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          className="backdrop"
          exit="hidden"
        >
          <motion.div className="modal" variants={modal}>
            <p>WAnt to make another pizza kekw???</p>
            <Link to="/">
              <button>Start again kekw!</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
