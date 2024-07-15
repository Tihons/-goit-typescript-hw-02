import Modal from "react-modal";
import { Images } from "../types";

const customStyles: Modal.Styles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
interface ImageModalProps {
  onCloseModal: () => void;
  isOpen: boolean;
  modalImg: Images | null;
}
const ImageModal: React.FC<ImageModalProps> = ({
  modalImg,
  isOpen,
  onCloseModal,
}) => {
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onCloseModal}
        ariaHideApp={false}
      >
        {modalImg && (
          <img
            src={modalImg.urls.regular}
            alt={modalImg.alt_description}
            width={800}
            height={600}
          />
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;