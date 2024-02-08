import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

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
});
