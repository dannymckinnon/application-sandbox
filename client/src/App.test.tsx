import { describe, it, expect, vi, beforeAll, Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import service from './services/services';

vi.mock('./services/services');

describe('App component', () => {
  beforeAll(() => {
    (service.getFruits as Mock).mockResolvedValue([
      'Apple',
      'Banana',
      'Cherry',
    ]);
  });

  it('renders fruits from the service', async () => {
    render(<App />);

    const apple = await screen.findByText('Apple 22222');
    const banana = await screen.findByText('Banana 22222');
    const cherry = await screen.findByText('Cherry 22222');

    expect(apple).toBeInTheDocument();
    expect(banana).toBeInTheDocument();
    expect(cherry).toBeInTheDocument();
  });
});
