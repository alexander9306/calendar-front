import React from "react";
import { useForm } from "react-hook-form";
import { CCol, CFormGroup, CLabel, CRow } from "@coreui/react";

interface IDataProp {
  register: ReturnType<typeof useForm>["register"];
  errors: ReturnType<typeof useForm>["errors"];
}

const EventForm: React.FunctionComponent<IDataProp> = ({
  register,
  errors,
}) => {
  return (
    <CCol xs="12" sm="6" md="12">
      <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="ctitle">Title</CLabel>
            <input
              className="form-control"
              name="title"
              id="ctitle"
              type="text"
              ref={register({
                required: true,
                maxLength: 50,
              })}
            />
            {!!errors.title && <p className="text-danger">Title is required</p>}
          </CFormGroup>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs="12">
          <CFormGroup>
            <CLabel htmlFor="cdescription">Description</CLabel>
            <textarea
              className="form-control"
              rows={5}
              cols={60}
              name="description"
              maxLength={255}
              ref={register({ maxLength: 255 })}
            />
            {!!errors.description && (
              <p className="text-danger">Max length is 255</p>
            )}
          </CFormGroup>
        </CCol>
      </CRow>
    </CCol>
  );
};

export default EventForm;
