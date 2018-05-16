import React from 'react';
import { shallow } from 'enzyme';
import EventDetail from '../components/eventDetail';

describe(EventDetail, () => {
    const data = {
        "date_time": {
            "am_pm": "pm",
            "datetime": "2017-06-13T19:00:00",
            "end_time": "10",
            "start_time": "8"
        },
        "location":{
            "address": {
                "geoloc": "40.7134658,-73.9415119"
            }
        }
    }

    const wrapper = shallow(<EventDetail event={data}/>);

    it('renders the date', () => {
        expect(wrapper.find('div.details').text()).toContain("Tue Jun 13 2017");
    })

    it('renders the time', () => {
        expect(wrapper.find('div.details').text()).toContain("8:00 pm - 10:00 pm");
    })

    it('renders the map element', () => {
        expect(wrapper.find('div.map').length).toEqual(1);
    })
})