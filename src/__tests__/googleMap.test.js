import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import GoogleMap from '../components/googleMap';


describe(GoogleMap, () => {
    // it('renders and matches snapshot', () => {
    //     const tree = renderer
    //       .create(<GoogleMap />)
    //       .toJSON();
    //     expect(tree).toMatchSnapshot();
    //   });
    it('should call component did mount method and call api', () => {
        const spy = jest.spyOn(GoogleMap.prototype, 'componentDidMount');
        const wrapper = mount(<GoogleMap />);
        wrapper.instance().componentDidMount();
        expect(spy).toHaveBeenCalled();
    })
})