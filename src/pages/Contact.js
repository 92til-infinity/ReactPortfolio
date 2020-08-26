import React from "react";
import "../Styles/styles.css"
import "../assets/github icon.png"
function Contact() {
    return (
        <div id="main-container" class="container">
            <section class="MainContainer">
                <h1>Contact Me</h1>

                <form id="contact-form">
                    <ul>
                        <li>
                            <label for="name">NAME</label>
                            <input type="text" name="name" id="name" placeholder="john smith" required="required" />
                        </li>
                        <li>
                            <label for="email">EMAIL</label>
                            <input type="text" name="email" id="email" placeholder="example@gmail.com" required="required" />
                        </li>
                        <li>
                            <label for="message">MESSAGE</label>
                            <textarea id="message" name="message" required="required"></textarea>
                        </li>
                    </ul>
                    <input type="submit" name="submit" />

                </form>

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

export default Contact;