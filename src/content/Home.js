import dp2 from "../img/sandra2.jpg"
export default function About () {
    return (
        <div class = "about-wrapper">
            <div class = "about-left">
                <div class = "about-left-content">
                    <div>
                        <div class = "shadow">
                            <div class = "about-img">
                                <img src = { dp2 } alt = "about image"/>
                            </div>
                        </div>

                        <h2>Sandra<br/>Moreira</h2>
                        <h3>Software Developer</h3>
                        </div>

                        <ul class = "icons">
                            <li><a href="http://www.linkedin.com/in/sandra-moreira-0a878b172/"><i class="fab fa-linkedin-in"></i></a></li>
                            <li><a href="https://www.instagram.com/sandrapsmoreira/"><i class="fab fa-instagram-square"></i></a></li>
                            <li><a href="https://www.pinterest.co.uk/sandrapscmoreira/_saved/"><i class="fab fa-pinterest"></i></a></li>
                        </ul>
                     </div>
                </div>

                <div class = "about-right">
                    <h1>hi<span>!</span></h1>
                    <h2>Welcome to My Portfolio</h2>
                    <br/>
                   

                    <div class = "about-para">
                        <p>With 4 years of experience in the hospitality industry, im always looking for ways to improve my skills and to become a better professional.
With countless certifications of voluntary work in the events industry, I've learned how to team work with my colleagues.
I like to try different things and find different ways of finishing a task faster with the same successful outcome. </p>
                        <br/>
                        <p>Currently, I'm a final year Event Management student, while completing a Software Development Apprenticeship, and waiting for my big next adventure!</p>
                    </div>
                </div>
            </div>
        
    );
};