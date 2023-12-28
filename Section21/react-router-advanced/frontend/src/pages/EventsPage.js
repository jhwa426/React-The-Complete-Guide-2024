// import React from 'react'
// import { Link } from "react-router-dom";

// const DUMMY_EVENTS = [

//     { id: "e1", title: "Event 1" },
//     { id: "e2", title: "Event 2" },
//     { id: "e3", title: "Event 3" },

// ]
// const EventsPage = () => {
//     return (
//         <>
//             <h1>EventsPage</h1>
//             <ul>
//                 {DUMMY_EVENTS.map((event) => (
//                     <li key={event.id}>
//                         <Link to={event.id}>{event.title}</Link>
//                         {/* <Link to={`/events/${event.id}`}>{event.title}</Link> */}
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// }

// export default EventsPage;



// import { useEffect, useState } from 'react';

// import EventsList from '../components/EventsList';

// function EventsPage() {
//     const [isLoading, setIsLoading] = useState(false);
//     const [fetchedEvents, setFetchedEvents] = useState();
//     const [error, setError] = useState();

//     useEffect(() => {
//         async function fetchEvents() {
//             setIsLoading(true);
//             const response = await fetch('http://localhost:8080/events');

//             if (!response.ok) {
//                 setError('Fetching events failed.');
//             } else {
//                 const resData = await response.json();
//                 setFetchedEvents(resData.events);
//             }
//             setIsLoading(false);
//         }

//         fetchEvents();
//     }, []);
//     return (
//         <>
//             <div style={{ textAlign: 'center' }}>
//                 {isLoading && <p>Loading...</p>}
//                 {error && <p>{error}</p>}
//             </div>
//             {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
//         </>
//     );
// }

// export default EventsPage;

// import React from 'react'
// import EventsList from '../components/EventsList';
// import { json, useLoaderData } from "react-router-dom";

// const EventsPage = () => {
//     const data = useLoaderData();

//     if (data.isError) {
//         return <p>{data.message}</p>
//     }

//     const events = data.events;

//     return (
//         <EventsList events={events} />
//         // <EventsList />
//     );
// }

// export default EventsPage;

// export async function loader() {
//     // any default functions are allowed to use loader but not allowed for useState as it only works in react components.

//     const response = await fetch('http://localhost:8080/events');

//     if (!response.ok) {
//         // Error Handle

//         // 1)
//         // return { isError: true, message: "Could not fetch events." }

//         // 2)
//         // throw { message: "Could not fetch events." };

//         // 3)
//         // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
//         //     status: 500,
//         // });

//         return json(
//             { message: "Could not fetch events" },
//             { status: 500 },
//         );

//     } else {
//         return response;

//         // const res = new Response("any data", {status:201});
//         // return res;

//         // const resData = await response.json();
//         // return resData.events;
//     }
// }


import { Suspense } from 'react';
import { useLoaderData, json, defer, Await } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
    const { events } = useLoaderData();

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // return { isError: true, message: 'Could not fetch events.' };
        // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
        //   status: 500,
        // });
        throw json(
            { message: 'Could not fetch events.' },
            {
                status: 500,
            }
        );
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    return defer({
        events: loadEvents(),
    });
}
