import { useEffect, useRef, useCallback } from "react";
import ModalDisplay from "./ModalDisplay";
const Modal = (props) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    console.log(props.modalValue);
    if (modalRef.current === e.target) {
      props.modalValue(false);
    }
  };

  const esc = useCallback(
    (e) => {
      if (e.key === "Escape" && props.showModal) {
        props.modalValue(false);
      }
    },
    [props.modalValue, props.showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [esc]);
  return (
    <>
      {props.showModal ? (
        <div className="modal-overlay" ref={modalRef} onClick={closeModal}>
          <div className="modal-wrapper">
            <div className="cart-section">
              <ModalDisplay
                list={props.list}
                handleRemove={props.handleRemove}
                handleSave={props.handleSave}
              />
            </div>
            <div></div>
          </div>
        </div>
      ) : null}
    </>
  );
};
// const modalRef = useRef();
// const closeModal = (e) => {
//   if (modalRef.current === e.target) {
//     props.modalValue(false);
//   }
// };
// const esc = useCallback(
//   (e) => {
//     if (e.key === "Escape" && props.showModal) {
//       props.modalValue(false);
//     }
//   },
//   // [props.modalValue, props.showModal]
// );

export default Modal;
