import { render } from '@testing-library/react';

import Countries from './countries';

describe('Countries', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Countries />);
    expect(baseElement).toBeTruthy();
  });
});
