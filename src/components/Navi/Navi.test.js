import React from 'react';
import { shallow } from 'enzyme';
import Navi from './Navi';

describe('<Navi />', () => {
  test('renders', () => {
    const wrapper = shallow(<Navi />);
    expect(wrapper).toMatchSnapshot();
  });
});
