import React from 'react';
import { shallow } from 'enzyme';
import Paginati from './Paginati';

describe('<Paginati />', () => {
  test('renders', () => {
    const wrapper = shallow(<Paginati />);
    expect(wrapper).toMatchSnapshot();
  });
});
