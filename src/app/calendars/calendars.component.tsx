import React, { useState } from "react";
import FullCalendar, {
  EventApi,
  EventInput,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

import Layout from "../shared/layouts/layout.component";
import SEO from "../seo";
import NewEvent from "./new-event.component";

const todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

const INITIAL_EVENTS: EventInput[] = [
  {
    id: "01",
    title: "All-day event",
    start: todayStr,
  },
  {
    id: "02",
    title: "Timed event",
    start: `${todayStr}T12:00:00`,
  },
];

const Calendar: React.FunctionComponent = () => {
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: "03",
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  function renderEventContent(eventContent: EventContentArg) {
    return (
      <>
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </>
    );
  }

  // function renderSidebarEvent(event: EventApi) {
  //   return (
  //     <li key={event.id}>
  //       <b>
  //         {formatDate(event.start!, {
  //           year: "numeric",
  //           month: "short",
  //           day: "numeric",
  //         })}
  //       </b>
  //       <i>{event.title}</i>
  //     </li>
  //   );
  // }

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  return (
    <Layout>
      <SEO title="Calendar" />
      <h1>Calendar app</h1>
      <div className="container pt-5">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          editable
          selectable
          selectMirror
          dayMaxEvents
          weekends
          events={INITIAL_EVENTS}
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
        eventAdd={function(){}}
        eventChange={function(){}}
        eventRemove={function(){}}
        */
        />
      </div>
    </Layout>
  );
};

export default Calendar;
