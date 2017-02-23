import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Header from './Header';

describe('<Header/>', function () {
  it('should display a single h1 tag', function () {
    const wrapper = shallow(<Header/>);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
