import { Link, useNavigate, useNavigation, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, updateEvent } from "../../util/http.js";

import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
    const navigate = useNavigate();

    const { state } = useNavigation();
    const params = useParams();

    const { data, isPending, isError, error } = useQuery({
        queryKey: ['events', params.id],
        queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
    });

    const { mutate } = useMutation({
        mutationFn: updateEvent,
    })


    function handleSubmit(formData) {
        mutate({ id: params.id, event: formData });
        navigate("../");
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
