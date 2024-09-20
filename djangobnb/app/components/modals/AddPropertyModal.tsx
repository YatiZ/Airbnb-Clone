"use client";

import useAddPropertyModal from "@/app/hooks/usePropertyModal";
import LoginModal from "./LoginModal";
import Modal from "./Modal";

const AddPropertyModal = () => {
  const addPropertymodal = useAddPropertyModal();
  const content = (
    <>
      <p>hellword</p>
    </>
  );
  return (
    <Modal
      isOpen={addPropertymodal.isOpen}
      close={addPropertymodal.close}
      label="Add Property"
      content={content}
    />
  );
};

export default AddPropertyModal;
