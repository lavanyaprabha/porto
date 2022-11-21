import styles from "../styles/nav.css";
export default function Nav() {
    return (
        <div className="nav">
            <div className="home">
                <p>HOME</p>
                
                <select className="select">
                    <option>CATEGORIES</option>
                    <option>VARIATION 1</option>
                    <option>FULLWIDTH BANNER</option>
                    <option>BOXED SLIDER BANNER</option>
                    <option>BOXED IMAGE BANNER</option>
                    <option>LEFT SIDEBAR</option>
                    <option>RIGHT SIDEBAR</option>
                    <option>OFF-CANVAS FILTER</option>
                    <option>HORIZONTAL FILTER1</option>
                    <option>HORIZONTAL FILTER2</option>
                </select>
                <select className="select">
                    <option>PRODUCTS</option>
                    <option>VARIATION 1</option>
                    <option>FULLWIDTH BANNER</option>
                    <option>BOXED SLIDER BANNER</option>
                    <option>BOXED IMAGE BANNER</option>
                    <option>LEFT SIDEBAR</option>
                    <option>RIGHT SIDEBAR</option>
                    <option>OFF-CANVAS FILTER</option>
                    <option>HORIZONTAL FILTER1</option>
                    <option>HORIZONTAL FILTER2</option>
                </select>
                <select className="opt">
                    <option>PAGES</option>
                    <option>VARIATION 1</option>
                    <option>FULLWIDTH BANNER</option>
                    <option>BOXED SLIDER BANNER</option>
                    <option>BOXED IMAGE BANNER</option>
                    <option>LEFT SIDEBAR</option>
                    <option>RIGHT SIDEBAR</option>
                    <option>OFF-CANVAS FILTER</option>
                    <option>HORIZONTAL FILTER1</option>
                    <option>HORIZONTAL FILTER2</option>
                </select>


                <p>BLOG</p>
                <p>ABOUT US</p>
                <p>CONTACT US</p>
            </div>
            <div>
                <p>SPECIAL OFFER!</p>
                <p>BUY PORTO!</p>

            </div>
        </div>
    )
}
