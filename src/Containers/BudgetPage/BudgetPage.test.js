import React from 'react';
import { render } from '@testing-library/react';
import BudgetPage from './BudgetPage';
import MockStoreProvider from '../../utils/mockStoreProvider';

const getMockProps = overrides => ({
  budget:{
    error: null,
    loading: true
  },
  ...overrides,
});

const renderComponent = (props = {}) => (
  <MockStoreProvider>
    <BudgetPage {...props}/>
  </MockStoreProvider>
);

describe('<BudgetPage />', () => {
  it('<BudgetPage />', () => { 
    const props = { 
      match: {
        params : {
          month: [{
            jan: '',
            feb: '',
            mar: ''
          }]
        }
      }
    };
    const { container : { firstChild } } = render( renderComponent(getMockProps({...props})) );
  
    expect(firstChild).toMatchSnapshot();
  })
})