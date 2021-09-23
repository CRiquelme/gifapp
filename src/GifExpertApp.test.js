import React from "react";
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { GifExpertApp } from './GifExpertApp';

let wrapper;

describe('GifExpertApp', () => {
  beforeEach(() => {
    wrapper = null;
  });

  it("Should render an h1", async () => {
    await act(async () => {
      wrapper = mount(<GifExpertApp />);
    });
    expect(wrapper.find('h1').length).toBe(1);
  });

  it("Should render a input", () => {
    wrapper = mount(<GifExpertApp />);
    expect(wrapper.find('input').length).toBe(1);
  });
});