import { Link, useNavigate } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation } from "@tanstack/react-query";
import { createNewEvent, queryClient } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function NewEvent() {
    const navigate = useNavigate();

    const { mutate, isPending, isError, error } = useMutation({
        // mutationKey: ,
        mutationFn: createNewEvent,
        onSuccess: () => { // only working after succeed the mutate
            queryClient.invalidateQueries({ queryKey: ["events"] }); // exact: true - exactly "events"
            navigate("/events");
        },
    });

    function handleSubmit(formData) {
        mutate({ event: formData });
        // navigate("/events"); // whenever success or fail, it navigates to events page
    }

    return (
        <Modal onClose={() => navigate('../')}>
            <EventForm onSubmit={handleSubmit}>
                {isPending && "Submitting..."}
                {!isPending && (
                    <>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Create
                        </button>
                    </>
                )}
            </EventForm>
            {isError && <ErrorBlock title="An error occurred" message={error.info?.message || "Failed to fetch the events"} />}
        </Modal>
    );
}
