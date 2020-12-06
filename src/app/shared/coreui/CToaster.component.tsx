import React, { useEffect } from "react";
import { CToast, CToastBody, CToaster, CToastHeader } from "@coreui/react";

interface IProps {
  show?: boolean;
  fade?: boolean;
  autohide?: number | boolean;
  message: string;
  title: string;
  position?: CToaster["position"];
  type?: "success" | "fail";
}

const Toaster: React.FunctionComponent<IProps> = ({
  show = true,
  autohide=4000,
  fade,
  message,
  title,
  position,
  type
}) => {
  useEffect(() => {
    return () => {
      show = false
    };
  }, [show])


  function getType(type?: "success" | "fail"){
    if(!type) return;
    const options: Record<string, string> = {
      "success": "bg-success text-white",
      "fail": "bg-danger text-white",
    };
    return options[type];
  }

  return (
    <>
      <CToaster position={position}>
        <CToast show={show} autohide={autohide} fade={fade}>
          <CToastHeader closeButton className={getType(type)}>{title}</CToastHeader>
          <CToastBody>{message}</CToastBody>
        </CToast>
      </CToaster>
    </>
  );
};

export default Toaster;
