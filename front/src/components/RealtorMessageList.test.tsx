import { describe, test, expect } from 'vitest';
import RealtorMessageList from './RealtorMessageList';
import customRender from '../../test-utils';

describe('RealtorMessageList', () => {
  test('should render RealtorMessageList component', () => {
    const wrapper = customRender(<RealtorMessageList isMobile={false} />);
    expect(wrapper.getByTestId('realtor-message-list')).toBeInTheDocument();
  });
});
