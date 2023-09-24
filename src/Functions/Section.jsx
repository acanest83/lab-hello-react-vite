
import IronIconOne from "../images/icon1 iron.png";
import IronIconTwo from "../images/icon2 iron.png";
import IronIconThree from "../images/icon3 iron.png";
import IronIconFour from "../images/icon4 iron.png";
import "../Styles/header.css";

function Section() {
    return <>
        <div>
        <img src={IronIconOne} alt="IronIconOne" />
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
            <img src={IronIconTwo} alt="IronIconTwo" />
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
            <img src={IronIconThree} alt="IronIconThree" />
            <h2>Singel-Way</h2>
            <p>A set of inmutable values are passed to the component´s.</p>
            <img src={IronIconFour} alt="IronIconFour" />
            <h2>JSX</h2>
            <p>Statically-typed designed to run on modern browsers.</p>
        </div>
    </>;
}
export default Section;