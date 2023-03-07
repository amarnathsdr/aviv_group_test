import { describe, test, expect } from 'vitest';
import { fireEvent, waitFor } from '@testing-library/react';
import Header from './Header';
import customRender from '../../test-utils';

describe('Header', () => {
  test('should render Header component', () => {
    const wrapper = customRender(<Header />);
    expect(wrapper.getByTestId('header')).toBeInTheDocument();
  });

  test('should render the unread messages count', () => {
    const wrapper = customRender(<Header />);
    expect(wrapper.getByTestId('unread-messages')).toBeInTheDocument();
  });

  test('should render the realtor select', () => {
    const wrapper = customRender(<Header />);
    expect(wrapper.getByTestId('realtor-select')).toBeInTheDocument();
  });

  test('should change the router with the correct realtorId when selecting an option', async () => {
    const wrapper = customRender(<Header />);
    const element = wrapper.getByTestId('realtor-select');
    fireEvent.change(element, {
      target: { value: '101' },
    });
    await waitFor(() => expect(window.location.pathname).toContain('/realtors/101'));
  });
});
