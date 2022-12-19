import { Icon } from "@iconify/react";
import { MouseEvent } from "react";
import Modal from "react-modal";
import styles from "./SignUp.module.css";
import { useSession, signIn, signOut } from "next-auth/react"

type SignUpProps = {
  modalIsOpen: boolean;
  closeModal: any;
};

const customStyles = {
  overlay: {
    backgroundColor: "rgba(000, 000, 000, 0.5)",
  },
  content: {
    background: "#0f1e33",
    border: "none",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const SignUp = ({ modalIsOpen, closeModal }: SignUpProps) => {

  const { data: session } = useSession()

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <div className={styles.modal}>
        <button></button>
        <h3>SIGN IN</h3>
        <button className={styles.social_signIn} onClick={() => signIn('google')}><Icon icon="flat-color-icons:google" />Sign In with Google</button>
        <button className={styles.social_signIn} ><Icon icon="logos:facebook" />Sign In with Facebook</button>
      </div>
    </Modal>
  );
};

export default SignUp;
