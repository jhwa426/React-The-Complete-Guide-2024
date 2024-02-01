import Accordion from "./components/Accordion/Accordion";
// import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
    return (
        <main>
            <section>
                <h2>Why work with us?</h2>
                <Accordion className="accordion">

                    <Accordion.Item
                        id="experience"
                        className="accordion-item"
                        title="We got 20 years of experiences"
                    >
                        <article>
                            <p>TEXT AREA</p>
                        </article>
                    </Accordion.Item>

                    <Accordion.Item
                        id="item"
                        className="accordion-item"
                        title="We got 20 years of experiences2"
                    >
                        <article>
                            <p>TEXT AREA2</p>
                        </article>
                    </Accordion.Item>

                </Accordion>
            </section>
        </main>
    );
}
export default App;
