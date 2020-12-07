import React from "react";
import {
  CButton,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalBody,
} from "@coreui/react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import useCreateEventsAPI from "./new-event.api";
import EventForm from "./event-form.component";
import { APIDateFormatter } from "../shared/utils";

interface IDataProp {
  startStr: string;
  endStr: string;
  show: boolean;
  setShowNewEvent: (show: boolean) => void;
}

interface IDataForm {
  title: string;
  description: string;
}

const NewEvent: React.FunctionComponent<IDataProp> = ({
  startStr,
  endStr,
  show,
  setShowNewEvent,
}) => {
  const [createEvent, createEventError] = useCreateEventsAPI();
  const { register, handleSubmit, errors, reset } = useForm<IDataForm>();

  function close() {
    reset();
    setShowNewEvent(false);
  }

  const onSubmit = ({ title, description }: IDataForm) => {
    createEvent({
      variables: {
        id: uuidv4(),
        name: title,
        description,
        start: new APIDateFormatter(startStr).isLessThan().toISOString(),
        end: new APIDateFormatter(endStr).isLessThan().toISOString(),
      },
    });

    close();
  };

  return (
    <>
      <CModal show={show} centered onClose={close}>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="form-horizontal "
        >
          <CModalHeader closeButton>Create Event</CModalHeader>
          <CModalBody>
            <EventForm register={register} errors={errors} />
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" type="submit">
              Save
            </CButton>{" "}
            <CButton color="secondary" onClick={close}>
              Cancel
            </CButton>
          </CModalFooter>
          {createEventError && (
            <p className="text-danger">There was an error with the request.</p>
          )}
        </form>
      </CModal>
    </>
  );
};

export default NewEvent;
