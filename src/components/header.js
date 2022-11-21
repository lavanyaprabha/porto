import styles from "../styles/header.css";
import logo from "../media/logo.png"
import { Input, Button } from "antd";
import {
    UserOutlined,
    HeartOutlined,
    ShoppingCartOutlined,
    SearchOutlined,
    PhoneOutlined   ,
} from "@ant-design/icons/lib/icons";

export default function Header() {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="porto logo" />
            <div className="search">
                <Input.Group compact>
                    <Input style={{ width: "calc(100% - 200px)" }} />
                    <select className="selectTag">
                        <option>All Categories</option>
                        <option>Fashion</option>
                        <option>-Women</option>
                        <option>-Men</option>
                        <option>-Jewellary</option>
                        <option>-Kids Fashion</option>
                        <option>-Smart Tv's</option>
                        <option>-Camera</option>
                        <option>-Games</option>
                    </select>
                    <Button type="primary">
                        <SearchOutlined />
                    </Button>
                </Input.Group>
            </div>

            <div>
                <div className="call">
                <PhoneOutlined />
                </div>
                <div>CallusNow
                    <div className="num">+1234567890</div>
                </div>
            </div>

            <div>
                <div><UserOutlined /></div>
                <div> <HeartOutlined /></div>
                <div><ShoppingCartOutlined /></div>
            </div>
        </div>
    );
}
