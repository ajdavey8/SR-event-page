import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

window.google = {
    maps: {
      Map:  class {}
    }
  }

window.google = {
    maps: {
      Maker: class {}
    }
};

