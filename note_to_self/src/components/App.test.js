import React from 'react';
import { mount } from 'enzyme';
import App from './App';

import '../tempPolyfills';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter(), disableLifecycleMethods: true });

describe('App Component', () => {
  let app = mount(<App />)

  it('renders the App Title', () => {
    expect(app.find('h2').text()).toEqual('Note to Seft');
  });

  it('renders the clear button', () => {
    expect(app.find('.btn').at(1).text()).toEqual('Clear Notes');
  });

  describe('when rendering the form', () => {
    it('create a form component', () => {
      expect(app.find('Form').exists()).toBe(true);
    });

    it('render a FormControl Component', () => {
      expect(app.find('FormControl').exists()).toBe(true);
    });

    it('renders the submit button', () => {
      expect(app.find('.btn').at(0).text()).toEqual('Submit');
    });
  });

  describe('when creating a note', () => {
    let testNote = 'test note';
    beforeEach(() => {
      app.find('FormControl').simulate('change', {
        target: { value: testNote }
      });
    });

    it('updates the text in state', () => {
      expect(app.state().text).toEqual(testNote);
    });

    describe('and submitting the new note by clicking submit', () => {
      beforeEach(() => {
        app.find('.btn').at(0).simulate('click');
      });

      it('adds the new note to state', () => {
        expect(app.state().notes[0].text).toEqual(testNote);
      });
    })

    describe('and submitting the new note by hit Enter', () => {
      beforeEach(() => {
        app.find('FormControl').simulate('keypress', { key: 'Enter' });
      });

      it('adds the new note to state', () => {
        expect(app.state().notes[0].text).toEqual(testNote);
      });


      describe('and remounting the component', () => {
        let app2;
        beforeEach(() => {
          app2 = mount(<App />)
        })

        it('read the stored note cookies', () => {
          console.log(typeof app2.state())
          expect(app2.state().notes[0].text).toEqual(testNote);
        })
      })

      describe('and clicking clear button', () => {
        beforeEach(() => {
          app.find('.btn').at(1).simulate('click');
        });

        it('clear out notes in state', () => {
          expect(app.state().notes.length).toEqual(0);
        });
      });
    });
  });
})