import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import NotFound from "./index";
configure({ adapter: new Adapter() });

describe("NotFound", () => {
  it("renders without crashing", () => {
    shallow(<NotFound />);
  });

  it("should display Error message for missing path", () => {
    const wrapper = shallow(<NotFound />);
    const errorMessage = "Error: Path does not exist.";
    expect(wrapper.contains(errorMessage)).toEqual(true);
  });
});
