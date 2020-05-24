import React from 'react';
import { render } from '@testing-library/react';
import Button from './Button';
import { faItalic } from '@fortawesome/free-solid-svg-icons';

describe('<Button />', () => {
  it('should render button snapshot', () => {
    const props = {
      title: 'testButton',
      variant: 'testVariant',
      className: 'testClassName'
    }
    const { container: { firstChild }} = render(<Button {...props }>test</Button>)
    expect(firstChild).toMatchSnapshot();
  })
})