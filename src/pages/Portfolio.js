import React from "react";
import "../Styles/styles.css"

function Portfolio() {
    return (
        <div id="main-container" class="container">
            <section class="MainContainer">
                <h1>Portfolio</h1>
                <div class="work">
                    <a href="https://92til-infinity.github.io/UCDBC-HappyHour/"> <img src="assets/images/GitHub-Mark.jpg"
                        class="auth-image" alt="Group Projects" /> </a>
                    <h3>Happy Hour Project</h3>
                </div>

                <div class="work">
                    <a href="https://github.com/92til-infinity/Project2x4"> </a><img src="assets/images/houses.jpg"
                        class="auth-image" alt="houses" />
                    <h3 href=" https://project2x4.herokuapp.com/">2Play Project</h3>
                </div>

                <div class="work">
                    <img src="assets/images/subaru-logo.jpg" class="auth-image" alt="Subaru" />
                    <h3>Subaru</h3>
                </div>

                <div class="work">
                    <img src="assets/images/the office.jpg" class="auth-image" alt="TV shows" />
                    <h3>Best Show Ever</h3>
                </div>
            </section>
            <section class="sidebar">
                <div id="connector">
                    <h2>Follow me here.</h2>
                    <a href="https://github.com/92til-infinity"> <img src="assets/images/github icon.png" class="networking"
                        alt="GITHUB" /> </a>
                </div>

            </section>



        </div>
    );
}

export default Portfolio;