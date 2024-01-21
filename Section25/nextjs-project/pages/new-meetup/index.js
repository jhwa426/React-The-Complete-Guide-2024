// our-domain.com/new-meetup

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import React from 'react'

const NewMeetupPage = () => {
    const router = useRouter();


    async function addMeetupHandler(enteredMeetupData) {
        // console.log(enteredMeetupData);
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetupData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();

        console.log(data);

        router.push("/");
    }

    return (
        <>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}

export default NewMeetupPage;