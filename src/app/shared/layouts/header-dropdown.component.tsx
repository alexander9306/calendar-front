import React from "react";
import { css } from "@emotion/core";
import { AiOutlineLogout } from "react-icons/ai";
import { logout } from "../login.service";

const HeaderButton: React.FunctionComponent = () => {
  return (
    <>
      <AiOutlineLogout
        css={css`
            color: rgba(0, 0, 21, 0.5);
            height: 1.5rem;
            width: 1.5rem;

            &:hover {
              cursor: pointer;
              color: rgba(0, 0, 0, 0.85);
            }
          `}
        title="Salir"
        onClick={logout}
      />
    </>
  );
};

export default React.memo(HeaderButton);
