import React from 'react';
import { render } from '@testing-library/react';
import MockStoreProvider from '../../utils/mockStoreProvider';
import Box from './index';

const renderComponent = (props = {}) => (
  <MockStoreProvider>
    <Box {...props}>test</Box>
  </MockStoreProvider>
);

describe('<Box />', () => {
  it('it should render a snapshot with box body and className', () => {
    const props = {
      className: 'testClass'
    }
    const { container : { firstChild } } = render(renderComponent({ ...props }))
    expect(firstChild).toMatchSnapshot();
  });

  it('it should render a snapshot with box body, className, header', () => {
    const props = {
      className: 'testClass',
      header: 'testHeader'
    }
    const { container : { firstChild } } = render(renderComponent({ ...props }))
    expect(firstChild).toMatchSnapshot();
  });

  it('it should render a snapshot with box body, className, footer', () => {
    const props = {
      className: 'testClass',
      footer: 'testFooter'
    }
    const { container : { firstChild } } = render(renderComponent({ ...props }))
    expect(firstChild).toMatchSnapshot();
  });


  it('it should render a snapshot with box header, body, className, footer', () => {
    const props = {
      className: 'testClass',
      header: 'testHeader',
      footer: 'testFooter'
    }
    const { container : { firstChild } } = render(renderComponent({ ...props }))
    expect(firstChild).toMatchSnapshot();
  });
})