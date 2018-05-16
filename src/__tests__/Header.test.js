import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../components/header';

describe(Header, () => {
    const wrapper = shallow(<Header/>);
    // it('renders the Header and matches the snapshot', () => {
    //     const tree = renderer
    //     .create(<Header/>)
    //     .toJSON();
    // expect(tree).toMatchSnapshot();
    // })

    it('renders the links in the navigation bar', () => {
        const navlinks = wrapper.find('a').length;
        expect(navlinks).toEqual(3);
    });

})