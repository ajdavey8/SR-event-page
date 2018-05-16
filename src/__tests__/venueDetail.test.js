import React from 'react';
import { shallow } from 'enzyme';
import VenueDetail from '../components/venueDetail';

describe(VenueDetail, () => {
    const data = {
        "areas_covered":"Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
    }

    const wrapper = shallow(<VenueDetail venue={data}/>);

    it('renders the date', () => {
        expect(wrapper.find('div.areas').text()).toContain("Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.");
    })
})