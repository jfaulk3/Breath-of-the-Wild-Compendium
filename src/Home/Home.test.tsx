import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Link } from "react-router-dom";
import Home from "./index";
configure({ adapter: new Adapter() });

describe("Home", () => {
  it("renders without crashing", () => {
    shallow(<Home />);
  });

  it("should display the link to search by categories", () => {
    const wrapper = shallow(<Home />);
    const categoryLink = <Link to="/category">Search by category</Link>;
    expect(wrapper.contains(categoryLink)).toEqual(true);
  });
  it("should display the general search bar", () => {
    const wrapper = shallow(<Home />);
    const searchBar = (
      <label htmlFor="name">
        Search by name or Id: <input id="name" name="name" type="text"></input>
      </label>
    );
    expect(wrapper.contains(searchBar)).toEqual(true);
  });
});
