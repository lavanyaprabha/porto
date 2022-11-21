import styles from "../styles/section.css";
import {
    CarOutlined,
    DollarOutlined,
    HourglassOutlined,
} from "@ant-design/icons/lib/icons";

export default function Section() {
    return (
        <div className="section">
            <div className="mon">
             <div >
             <CarOutlined />
             </div>
                <p>FREE SHIPPING & RETURN

                    <p>Free shipping on all orders over $99</p>
                </p>
            </div>

            <div className="mon">
              <div >
              <DollarOutlined />
              </div>
                <p>MONEY BACK GUARANTEE
                    <p>100% money back guarantee</p>
                </p>

            </div>




            <div className="mon">

                <div>
                    <HourglassOutlined />
                </div>
                <p>ONLINE SUPPORT 24/7
                    <p>lorem ipusm dolor sit</p></p>


            </div>

        </div>
    )
}