import React from "react";
import { AiOutlineFileText } from "react-icons/ai";
import { CContainer } from "@coreui/react";

interface IDataProps {
  message?: string;
}

const NoDatos: React.FunctionComponent<IDataProps> = ({ message }) => {
  return (
    <>
      <CContainer style={{ paddingTop: 100 }}>
        <div className="d-flex justify-content-center">
          <h1>{message ?? "No hay datos"}</h1>
        </div>
        <div className="d-flex justify-content-center">
          <AiOutlineFileText style={{ width: "8rem", height: "8rem" }} />
        </div>
      </CContainer>
    </>
  );
};

export default NoDatos;
