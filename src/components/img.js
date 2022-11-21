import styles from "../styles/img.css";

export default function Img() {
    return (
        <div className="img">
            <div>
                <div>
                    <img src="https://d-themes.com/react/porto/demo5/images/home/slider/slide-1.jpg" />
                </div>
                <div className="upper">
                    <h5>
                        Find the Boundaries. Push Through!
                    </h5>
                    <h1>
                        <em>  Jeans Sale</em>
                    </h1>

                    <em>
                     <h2>
                      UP <br/>
                      TO 
                    </h2>
                    <h2>80% OFF</h2>
                    </em>
                   <h5>
                        STARTING AT
                        <span>$199 <sup>99</sup></span>
                        <button>SHOP NOW!</button>
                    </h5>

                </div>
            </div>
        </div>

    )
}