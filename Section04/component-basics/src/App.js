import Header from './components/Header';
import Concept from './components/Concept';

import componentsImage from './assets/images/components.png';
import stateImage from './assets/images/state.png';
import eventsImage from './assets/images/events.png';

import Card from './components/Card';

const concepts = [
    {
        title: 'Components',
        image: componentsImage,
        description:
            'Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.',
    },
    {
        title: 'State',
        image: stateImage,
        description:
            'State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.',
    },
    {
        title: 'Events',
        image: eventsImage,
        description:
            'Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.',
    },
];

function App() {
    return (
        <div>
            <Header />

            <ul id="concepts">

                <Concept
                    image={concepts[0].image}
                    title={concepts[0].title}
                    description={concepts[0].description}
                />

                <Concept
                    image={concepts[1].image}
                    title={concepts[1].title}
                    description={concepts[1].description}
                />

                <Concept
                    image={concepts[1].image}
                    title={concepts[1].title}
                    description={concepts[1].description}
                />


                {/* <li className="concept">
                    <img src={concepts[0].image} alt="Concepts TITLE" />
                    <h2>{concepts[0].title}: TITLE</h2>
                    <p>{concepts[0].description} DESCRIPTION</p>
                </li>

                <li className="concept">
                    <img src={concepts[1].image} alt="State TITLE" />
                    <h2>{concepts[1].title}: TITLE</h2>
                    <p>{concepts[1].description} DESCRIPTION</p>
                </li>

                <li className="concept">
                    <img src={concepts[2].image} alt="Event TITLE" />
                    <h2>{concepts[2].title}: TITLE</h2>
                    <p>{concepts[2].description} DESCRIPTION</p>
                </li> */}



                {/* <li className='concept'>
                    <Card
                        image={concepts[1].image}
                        title={concepts[1].title}
                        description={concepts[1].description}
                    />
                </li> */}

            </ul>




        </div>
    );
}

export default App;
