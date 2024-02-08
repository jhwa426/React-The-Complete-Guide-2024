import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
    test('renders Hello World as a text', () => {
        // Three "A"s - Arrange, Act, Assert

        // Arrange
        render(<Greeting />);

        // Act
        // ... nothing

        // Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test("renders button good to see you! if the button was NOT clicked", () => {
        render(<Greeting />);

        const outputElement = screen.getByText('good to see you!', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });


    test("renders button good to see you! if the button was clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });


    test("does not renders if the button was clicked", () => {
        render(<Greeting />);

        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);

        const outputElement = screen.queryByText('good to see you!', { exact: false });
        expect(outputElement).tobeNull();
    })
});
