import React from "react";
import img from "../assets/background-steel-image.jpg"
import "../Styles/styles.css"

function Home() {
    return (
        <div class="container" >
            <h1> J. Scott Glover</h1>
            <div>
                <img alt="img" src={img} />

            </div>
            <div class="goal">
                <h3>End Goal</h3>
                <p>
                    <ol>
                        <li>step 1: finish class with a full portfolio</li>
                        <li>step 2: utilizie career services and get interviews</li>
                        <li>step 3: ACE interviews</li>
                        <li>step 4: get a job</li>
                        <li>step 5: keep moving forward</li>
                    </ol>
                </p>
            </div>

        </div>
    );
}

export default Home;