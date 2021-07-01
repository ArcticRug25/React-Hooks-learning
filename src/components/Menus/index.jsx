import { Menu } from "antd";
import { useHistory } from "react-router-dom";
const { SubMenu } = Menu;

export default function Menus() {
  const history = useHistory();
  const handClick = (e) => {
    switch (e.key) {
      case "1":
        history.push("/useState/test1");
        break;
      case "2":
        history.push("/useState/test2");
        break;
      default:
        break;
    }
  };
  return (
    <Menu
      style={{ width: 200, height: 100 + "vh" }}
      mode="inline"
      onClick={handClick}
    >
      <SubMenu key="sub1" title="useState">
        <Menu.Item key="1">test 1</Menu.Item>
        <Menu.Item key="2">test 2</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
