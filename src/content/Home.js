import dp from "../img/Sandra.jpg"
import ReactTypingEffect from 'react-typing-effect';
import Social from "../components/Social";

const Home = () => {
    return <div className="contents home">
        <img src={dp} alt="Sandra Moreira" className="display-picture" />
        <ReactTypingEffect 
        className='typing-effect' 
        text={"I am Sandra Moreira, a Final Year Event Management Student and a Software Developer"}
        />
         <Social />
    </div>
};

export default Home;