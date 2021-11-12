import React,{useState,useEffect,useRef} from "react"
import "./App.css"

export default ()=>{
    return(
        <>
            <div className="MovieList">
                <MyMovieCard myUrl="/img/Who_am_I_movie_poster.jpg"title="Who Am I" description={"Who Am I is a 2014 German techno-thriller film directed by Baran bo Odar. It is centered on a computer hacker group in Berlin geared towards global fame. It was screened in the Contemporary World Cinema section at the 2014 Toronto International Film Festival. The film was shot in Berlin and Rostock. Because of its storyline and some elements"} rating={4}/>
                <MyMovieCard myUrl="/img/Mr.Robot.jpg" title="Mr.Robot" description={"Mr. Robot est une série télévisée américaine en 45 épisodes d'environ 45 minutes créée par Sam Esmail et diffusée entre le 24 juin 2015 et le 22 décembre 2019 sur USA Network"} rating={5}/>
                <MyMovieCard myUrl="/img/himym.jpg" title="How I met Your Mother" description={"How I Met Your Mother is an American sitcom, created by Craig Thomas and Carter Bays for CBS. The series, which ran from 2005 to 2014, follows the main character, Ted Mosby, and his group of friends in New York City's Manhattan"} rating={5}/>

                <MyMovieCard myUrl="/img/3301.jpg" title={"Dark Web: Cicada 3301"} description={"Dark Web: Cicada 3301 is an action-comedy thriller film directed by Alan Ritchson, in his directorial debut, who co-wrote the script with Joshua Montcalm. Inspired by the eponymous organization, it stars Jack Kesy, Conor Leslie, Ron Funches, and Ritchson"} rating={2}/>
                <MyMovieCard myUrl="/img/jumanji.jpg" title={"Jumanji"} description={"Jumanji is an American media franchise, based on the children's books Jumanji and its sequel Zathura, written by Chris Van Allsburg. The first film was produced by TriStar Pictures, and subsequent films by Columbia Pictures, both subsidiaries of Sony Pictures"} rating={4}/>
                <MyMovieCard myUrl="/img/7.jpg" title={"Miracle in Cell No. 7"} description={"Miracle in Cell No. 7 is a 2019 Turkish drama film directed by Mehmet Ada Öztekin. It is an official adaptation of the 2013 South Korean comedy-drama film Miracle in Cell No. 7 using the same premise, but with significant changes in story, characters, and tone."} rating={5}/>
                <MyMovieCard myUrl="/img/boyka.jpg" title={"Boyka: Undisputed"} description={"Boyka: Undisputed is a 2017 American martial arts film directed by Isaac Florentine, and written by David White and Tony Mosher with a story by Boaz Davidson. It is the sequel to the 2010 boxing film Undisputed III: Redemption. Scott Adkins reprises his role as Yuri Boyka"} rating={3}/>
                <MyMovieCard myUrl="/img/saw.jpg" rating={4} title={"Saw"} description={"Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell. It is the first installment in the Saw film series, and stars Whannell, Cary Elwes, Danny Glover, Monica Potter, Michael Emerson, Ken Leung, and Tobin Bell"}/>

            </div>
        </>
    )
}

const MyMovieCard = ({myUrl,title,description,rating})=>{
const MyStyle = {background:`url(${myUrl}) center`,backgroundRepeat:"no-repeat",backgroundSize:"cover"};
const [myAnimation,setAnimation] = useState(null);

    return(
        <>
            <div onMouseOver={()=>{setAnimation({left:"0%"})}} onMouseOut={()=>{setAnimation(null)}} className="myCard" style={MyStyle}>
                <div className="def" style={myAnimation}>
                    <h1><b>{title}</b></h1>
                        <p><b>{description}</b></p>
                    <h1>{"⭐️".repeat(rating)}</h1>
                </div>
            </div>
        </>
    )
}
