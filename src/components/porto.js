import { Button } from "antd";
import styles from "../styles/porto.css";
export default function Porto() {
    return (
        <div className="porto">
            <div>
                <div>
                    <h2>Porto Watches</h2>
                    <h3><strike>20%</strike><span>30%<sup>OFF</sup></span></h3>
                    <button>SHOP NOW!</button>
                </div>
            </div>
            <div>
                <section>
                    <h2>DEAL PROMOS
                        <h3>STARTING AT $99</h3>
                    </h2>

                    <button>SHOP NOW!</button>

                </section>
            </div>

            <div>
                <h5>
                   <h4>
                    40%<sub>OFF</sub>
                   </h4>
                   <h3>
                    Handbags
                    <p>STARTING AT $99</p>
                    <button>SHOP NOW!</button>
                   </h3>
                  
                </h5>
            </div>

        </div>
    )

}