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

    it('renders a radio Option for I need a room', () => {
        const radioOption = wrapper.find('#need').length;
        expect(radioOption).toEqual(1);
    });

    it('renders a radio Option for I have a room', () => {
        const radioOption = wrapper.find('#have').length;
        expect(radioOption).toEqual(1);
    });

    it('renders a name input', () => {
        const textInput = wrapper.find('#username').length;
        expect(textInput).toEqual(1);
    });

    it('renders a email input', () => {
        const textInput = wrapper.find('#email').length;
        expect(textInput).toEqual(1);
    });
});