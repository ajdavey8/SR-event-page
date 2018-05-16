import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from '../components/header';

describe(Header, () => {
    it('renders the Header and matches the snapshot', () => {
        const tree = renderer
        .create(<Header/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
    })
})