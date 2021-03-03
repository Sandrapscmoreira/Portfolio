import ContactForm from "../components/ContactForm";

export default function Contact () {
    return(
        <div className="contents contact">
         <ContactForm/>
         <ul class = "icons">
            <li><a href="http://www.linkedin.com/in/sandra-moreira-0a878b172/"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="https://www.instagram.com/sandrapsmoreira/"><i class="fab fa-instagram-square"></i></a></li>
            <li><a href="https://www.pinterest.co.uk/sandrapscmoreira/_saved/"><i class="fab fa-pinterest"></i></a></li>
        </ul>
        
        </div>
    )
}