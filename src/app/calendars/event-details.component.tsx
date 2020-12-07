import React from "react";
import {
  CButton,
  CModal,
  CModalFooter,
  CModalHeader,
  CModalBody,
} from "@coreui/react";
import { useForm } from "react-hook-form";
import { ApolloError } from "@apollo/client";
import EventForm from "./event-form.component";
import { useUpdateEventAPI, useRemoveEventAPI } from "./event-details.api";
import { GetEventQuery } from "../generated/api";

interface IDataProp {
  show: boolean;
  foundEvent?: GetEventQuery["event"];
  setShowDetail: (show: boolean) => void;
  getEventError?: ApolloError;
}

interface IDataForm {
  title: string;
  description: string | null;
}

const EventDetails: React.FunctionComponent<IDataProp> = ({
  show,
  foundEvent,
  setShowDetail,
  getEventError,
}) => {
  const [updateEvent] = useUpdateEventAPI();

  const [removeEvent, removedEventError] = useRemoveEventAPI();

  const { register, handleSubmit, errors, reset } = useForm<IDataForm>({
    defaultValues: {
      title: foundEvent?.name,
      description: foundEvent?.description,
    },
  });

  function close() {
    reset();
    setShowDetail(false);
  }

  const onSubmit = async ({ title, description }: IDataForm) => {
    await updateEvent({
      variables: {
        id: foundEvent?.id ?? "",
        name: title,
        description,
        start: foundEvent?.start ?? "",
        end: foundEvent?.end ?? "",
      },
    });

    close();
  };

  function deleteEvent() {
    removeEvent({
      variables: {
        id: foundEvent?.id ?? "",
      },
    });
    close();
  }

  return (
    <>
      <CModal show={show} centered onClose={close}>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="form-horizontal "
        >
          <CModalHeader closeButton>Update Event</CModalHeader>
          <CModalBody>
            <EventForm register={register} errors={errors} />
          </CModalBody>
          <CModalFooter>
            <CButton color="primary" type="submit">
              Save
            </CButton>{" "}
            <CButton color="danger" onClick={deleteEvent}>
              Delete
            </CButton>{" "}
            <CButton color="secondary" onClick={close}>
              Cancel
            </CButton>
          </CModalFooter>
          {(!!getEventError || !!removedEventError) && (
            <p className="text-danger">There was an error with the request.</p>
          )}
        </form>
      </CModal>
    </>
  );
};

export default EventDetails;
