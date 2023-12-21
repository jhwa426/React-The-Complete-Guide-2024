import React from 'react'
import { useParams, json, useLoaderData, useRouteLoaderData, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
    // const params = useParams();

    // const data = useLoaderData();

    const data = useRouteLoaderData("event-detail");

    return (
        <>
            <EventItem event={data.event} />
        </>
    );
}

export default EventDetailPage;

export async function loader({ request, params }) {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id);

    if (!response.ok) {
        throw json(
            { message: "Could not fetch events" },
            { status: 500 },
        );
    } else {
        return response;
    }
}

export async function action({ params, request }) {
    const eventId = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + eventId, {
        method: request.method,
        // method: "DELETE"
    });

    if (!response.ok) {
        throw json(
            { message: "Could not delete events" },
            { status: 500 },
        );
    }
    return redirect("/events");
}