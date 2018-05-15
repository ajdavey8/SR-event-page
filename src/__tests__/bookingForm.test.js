import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import BookingForm from '../components/bookingForm';

describe(BookingForm, () => {
    const wrapper = shallow(<BookingForm/>);

    it('renders and matches snapshot', () => {
        const tree = renderer
            .create(<BookingForm/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders a checkbox for I need a room and is not selected', () => {
        const radioOption = wrapper.find('#need').length;
        expect(radioOption).toEqual(1);
    });
});