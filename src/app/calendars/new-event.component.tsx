import React, { useState } from "react";
import {
  CButton,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalBody,
} from "@coreui/react";

const NewEvent: React.FunctionComponent = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <CModal show={modal} onClose={toggle}>
        <CModalHeader closeButton>Modal title</CModalHeader>
        <CModalBody>Lorem ipsum dolor...</CModalBody>
        <CModalFooter>
          <CButton color="primary">Do Something</CButton>{" "}
          <CButton color="secondary" onClick={toggle}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default NewEvent;
