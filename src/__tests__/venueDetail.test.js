import React from 'react';
import { shallow } from 'enzyme';
import VenueDetail from '../components/venueDetail';

describe(VenueDetail, () => {
    const data = {
        "areas_covered":"Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.",
        "location":{
            "address":{
                "state":"New York"
            }
        }
    }

    const wrapper = shallow(<VenueDetail venue={data}/>);
    
    it('renders the people who it is for', () => {
        expect(wrapper.find('div.people').text()).toContain("New York");
    })

    it('renders the areas covered', () => {
        expect(wrapper.find('div.areas').text()).toContain("Brooklyn, Williamsburg, Queens, Jamaica, Astoria, Bronx, Long Island.");
    })
})