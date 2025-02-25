import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import service from './services/services';

vi.mock('./services/services');

describe('App component', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (service.getFruits as Mock).mockResolvedValue([
      'The home of the HomeBoy',
      'Fresh fuckin Dumpling',
      'Mr. Harrison',
    ]);
  });

  it('renders navigation links', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(screen.getByText('One')).toHaveAttribute('href', '#one');
    expect(screen.getByText('Two')).toHaveAttribute('href', '#two');
    expect(screen.getByText('Three')).toHaveAttribute('href', '#three');
  });

  it('renders images in sections', async () => {
    await act(async () => {
      render(<App />);
    });

    // Using getAllByRole with name option to find images
    const images = screen.getAllByRole('presentation');
    expect(images).toHaveLength(2);
  });

  it('fetches and displays fruits from the service', async () => {
    await act(async () => {
      render(<App />);
    });

    const homeBoy = await screen.findByText('The home of the HomeBoy');
    const dumpling = await screen.findByText('Fresh fuckin Dumpling');
    const harrison = await screen.findByText('Mr. Harrison');

    expect(homeBoy).toBeInTheDocument();
    expect(dumpling).toBeInTheDocument();
    expect(harrison).toBeInTheDocument();
  });

  it('calls getFruits on component mount', async () => {
    await act(async () => {
      render(<App />);
    });

    expect(service.getFruits).toHaveBeenCalledTimes(1);
  });
});
