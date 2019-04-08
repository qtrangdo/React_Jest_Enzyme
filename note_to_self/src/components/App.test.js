import React from 'react';
import { mount } from 'enzyme';
import App from './App';

import '../tempPolyfills';
 
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('App Component', () => {
  let app = mount(<App />)

  it('renders the App Title', () =>{
    expect(app.find('h2').text()).toEqual('Note to Seft');
  });

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('creat a form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('render a FormControl Component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('renders the submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    });
  })
})