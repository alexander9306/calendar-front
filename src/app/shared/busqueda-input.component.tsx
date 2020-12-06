import React from "react";
import {
  CCol,
  CFormGroup,
  CInputGroup,
  CButton,
  CInputGroupAppend,
} from "@coreui/react";
import { css } from "@emotion/core";
import { useForm } from "react-hook-form";

interface IDataProp {
  name: string;
  onSubmit: (input: never) => void;
  placeholder: string;
  title?: string;
  minLength?: number;
}

const BusquedaInput: React.FunctionComponent<IDataProp> = ({
  onSubmit,
  placeholder,
  name,
  title,
  minLength,
}) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      method="post"
      role="search"
      className="form-horizontal "
      onSubmit={handleSubmit(onSubmit)}
    >
      <CFormGroup
        row
        css={css`
        @media screen and (min-width: 768px) {
          float: right;
        }
        `}
      >
        <CCol md="12">
          <CInputGroup size="md">
            <input
              title={title}
              ref={register({ minLength })}
              className="form-control"
              type="search"
              name={name}
              minLength={minLength}
              placeholder={placeholder}
            />
            <CInputGroupAppend>
              <CButton type="submit" color="primary">
                Buscar
              </CButton>
            </CInputGroupAppend>
          </CInputGroup>
        </CCol>
      </CFormGroup>
    </form>
  );
};

export default BusquedaInput;
