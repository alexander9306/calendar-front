import React, { useState, useEffect } from "react";
import FullCalendar, {
  DateSelectArg,
  EventClickArg,
  EventContentArg,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import useEventsAPI from "./calendar.api";

import { useGetEventAPI } from "./event-details.api";
import Layout from "../shared/layouts/layout.component";
import SEO from "../seo";
import NewEvent from "./new-event.component";
import EventDetails from "./event-details.component";

const Calendar: React.FunctionComponent = () => {
  const [events, error] = useEventsAPI();

  const [getEvent, foundEvent, getEventError] = useGetEventAPI();
  const [showDetail, setShowDetail] = useState(false);
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [newEventDate, setNewEventDate] = useState({
    startStr: "",
    endStr: "",
  });

  useEffect(() => {
    if (foundEvent) setShowDetail(true);
  }, [foundEvent]);

  function handleDateSelect({
    endStr,
    startStr,
    view: { calendar },
  }: DateSelectArg) {
    setShowNewEvent(true);
    setNewEventDate({ startStr, endStr });

    calendar.unselect();
  }

  function handleEventClick({ event: { id } }: EventClickArg) {
    getEvent({ variables: { id } });
    if (foundEvent?.id === id) setShowDetail(true);
  }

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  }

  return (
    <Layout>
      <SEO title="Calendar" />
      <div className="container pt-5">
        <h1 className="pb-2">Calendar app</h1>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
          }}
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends
          events={events}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
        />
      </div>
      <NewEvent
        setShowNewEvent={setShowNewEvent}
        show={showNewEvent}
        startStr={newEventDate.startStr}
        endStr={newEventDate.endStr}
      />
      {showDetail && (
        <EventDetails
          foundEvent={foundEvent}
          setShowDetail={setShowDetail}
          show={showDetail}
          getEventError={getEventError}
        />
      )}
    </Layout>
  );
};

export default Calendar;
