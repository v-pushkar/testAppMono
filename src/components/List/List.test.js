import React from 'react';
import { shallow } from 'enzyme';
import List from './List';

describe('<List />', () => {
  test('renders', () => {
    const wrapper = shallow(<List />);
    expect(wrapper).toMatchSnapshot();
  });
});
