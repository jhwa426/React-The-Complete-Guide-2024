import { Link, redirect, useNavigate, useNavigation, useParams, useSubmit } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();
    const submit = useSubmit();

    const { state } = useNavigation();
    const params = useParams();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
        staleTime: 10000
    });

    // const { mutate } = useMutation({
    //     mutationFn: updateEvent,
    //     onMutate: async (data) => {
    //         const newEvent = data.event;

    //         await queryClient.cancelQueries({ queryKey: ["events", params.id] });
    //         const previousEvent = queryClient.getQueryData(["events", params.id]);

    //         queryClient.setQueryData(["events", params.id], newEvent);

    //         return { previousEvent }
    //     },
    //     onError: (error, data, context) => {
    //         queryClient.setQueryData(["events", params.id], context.previousEvent);
    //     },
    //     onSettled: () => {
    //         queryClient.invalidateQueries(["events", params.id]);
    //     }
    // });


    function handleSubmit(formData) {
        // mutate({ id: params.id, event: formData });
        // navigate("../");

        submit(formData, { method: "PUT" });
    }

    function handleClose() {
        navigate('../');
    }



    let content;

    if (isError) {
        content = (
            <>
                <ErrorBlock
                    title="Failed to load event"
                    message={
                        error.info?.message ||
                        'Failed to load event. Please check your inputs and try again later.'
                    }
                />
                <div className="form-actions">
                    <Link to="../" className="button">
                        Okay
                    </Link>
                </div>
            </>
        );
    }

    if (data) {
        content = (
            <EventForm inputData={data} onSubmit={handleSubmit}>
                {state === 'submitting' ? (
                    <p>Sending data...</p>
                ) : (
                    <>
                        <Link to="../" className="button-text">
                            Cancel
                        </Link>
                        <button type="submit" className="button">
                            Update
                        </button>
                    </>
                )}
            </EventForm>
        );
    }

    return (
        <Modal onClose={handleClose}>
            {content}
        </Modal>
    );
}

export function loader({ params }) {
    return queryClient.fetchQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    });
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const updateEventData = Object.fromEntries(formData);

    await updateEvent({ id: params.id, event: updateEventData });
    await queryClient.invalidateQueries(["events"]);

    return redirect("../");
}