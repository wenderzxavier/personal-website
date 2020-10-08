import React from "react";
import App from "../App";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../Card";

Enzyme.configure({ adapter: new Adapter() });

describe("App", () => {
  it("should render a Card component", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Card).exists()).toBeTruthy();
  });
});
