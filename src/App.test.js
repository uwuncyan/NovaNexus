// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NovaNexus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NovaNexus/i);
    expect(titleElement).toBeInTheDocument();
});
