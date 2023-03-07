import { describe, test, expect } from 'vitest';
import { waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RealtorMessageList from './RealtorMessageList';
import customRender from '../../test-utils';

describe('RealtorMessageList', () => {
  test('should render RealtorMessageList component', () => {
    const wrapper = customRender(<RealtorMessageList isMobile={false} />);
    expect(wrapper.getByTestId('realtor-message-list')).toBeInTheDocument();
  });
});
