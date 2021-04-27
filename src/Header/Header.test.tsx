import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Header from "./index";
import { Link } from "react-router-dom";
configure({ adapter: new Adapter() });

describe("Header", () => {
  it("renders without crashing", () => {
    shallow(<Header />);
  });

  it("should display the title of the application", () => {
    const wrapper = shallow(<Header />);
    const headerTitle = <h1>Zelda: Breath of the Wild Compendium</h1>;
    expect(wrapper.contains(headerTitle)).toEqual(true);
  });
  it("should display a link to home", () => {
    const wrapper = shallow(<Header />);
    const homeLink = <Link to="/">Home</Link>;
    expect(wrapper.contains(homeLink)).toEqual(true);
  });
  it("should display a link to categories", () => {
    const wrapper = shallow(<Header />);
    const homeLink = <Link to="/category">Categories</Link>;
    expect(wrapper.contains(homeLink)).toEqual(true);
  });
});
