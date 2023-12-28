// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage (DONE)
//    - EventsPage (DONE)
//    - EventDetailPage (DONE)
//    - NewEventPage (DONE)
//    - EditEventPage (DONE)

// 2. Add routing & route definitions for these five pages
//    - / => HomePage (DONE)
//    - /events => EventsPage (DONE)
//    - /events/<some-id> => EventDetailPage (DONE)
//    - /events/new => NewEventPage (DONE)
//    - /events/<some-id>/edit => EditEventPage (DONE)

// 3. Add a root layout that adds the <MainNavigation> component above all page components (DONE)

// 4. Add properly working links to the MainNavigation (DONE)

// 5. Ensure that the links in MainNavigation receive an "active" class when active (DONE)

// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage (DONE)

// 7. Output the ID of the selected event on the EventDetailPage (DONE)

// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components (DONE)

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from "../src/pages/Root";
import HomePage from "../src/pages/HomePage";
import EventsPage, { loader as eventsLoader } from "../src/pages/EventsPage";
import EventDetailPage, { action as deleteEventAction, loader as eventsDetailLoader } from "../src/pages/EventDetailPage";
import NewEventPage, { action as newEventAction } from "../src/pages/NewEventPage";
import EditEventPage from "../src/pages/EditEventPage";
import EventRoot from "../src/pages/EventRoot";
import Error from "./pages/Error";
import { action as editEventAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from '../src/pages/Newsletter';


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <EventRoot />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    {
                        path: ":eventId",
                        id: "event-detail",
                        loader: eventsDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: editEventAction,
                            },
                        ]
                    },

                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: newEventAction
                    },
                ]
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction
            },
        ],
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
