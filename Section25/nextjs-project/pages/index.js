import { useEffect, useState } from "react";
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from "mongodb";

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A First Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!'
    },
    {
        id: 'm2',
        title: 'A Second Meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        address: 'Some address 10, 12345 Some City',
        description: 'This is a second meetup!'
    }
];

function HomePage(props) {
    // const [loadedMeetups, setLoadMeetups] = useState([]);

    // useEffect(() => {
    //     setLoadMeetups(DUMMY_MEETUPS);
    // }, []);

    return (
        <MeetupList meetups={props.meetups} />
    )
}

// this is for authentification request
export async function getStaticProps() {
    // file loading, fetching
    // fetch data from an API

    // fetch("/api/meetups");
    const client = await MongoClient.connect("mongodb+srv://wodud6359:newPassword@cluster0.upzbgb5.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();

    const meetupCollection = db.collection("meetups");

    const meetups = await meetupCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString()
            }))
        },
        revalidate: 1,
    };
}


// generate every incoming request

// export async function getServerSideProps(context) {
//     // fetch data from an API
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         },
//     };
// }



export default HomePage;