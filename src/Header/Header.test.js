import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

it('should pass on click hamburger', () => {
    const data = {
        "navbarItems": [
            {
                "label": "",
                "href": ""
            }
        ],
        "duration": "",
        "detail": "",
        "condition": ""
    }

    const header = shallow(<Header data={data} />);
    header.find('.first-button').simulate('click');
    expect(header.state('isOpen')).toEqual(true);
    header.find('.first-button').simulate('click');
    expect(header.state('isOpen')).toEqual(false);
})