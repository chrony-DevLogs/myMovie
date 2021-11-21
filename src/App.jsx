import React,{useState,useEffect,useRef} from "react"
import { Link,BrowserRouter,Route } from "react-router-dom"
import "./App.css"

const readyMovies = [
    {
        id: 1,
        title:"Mr. Robot",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhindmovie.cc%2Fwp-content%2Fuploads%2F2021%2F05%2FMr.-Robot-Season-1-Dual-Audio.jpg&f=1&nofb=1",
        description:"Mr. Robot is an American drama thriller television series created by Sam Esmail for USA Network. It stars Rami Malek as Elliot Alderson, a cybersecurity engineer and hacker with social anxiety disorder and clinical depression. Elliot is recruited by an insurrectionary anarchist known as ",
        rating:5,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/xIBiJ_SzJTA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 2,
        title:"Saw",
        myUrl: "http://images6.fanpop.com/image/photos/40900000/Saw-Movie-Poster-saw-40979894-1629-2200.jpg",
        description: "Saw is a 2004 American horror film directed by James Wan, in his feature directorial debut, and written by Leigh Whannell from a story by Wan and Whannell. It is the first installment in the Saw film series, and stars",
        rating: 3,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/S-1QgOMQ-ls" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 3,
        title:"How I Met Your Mother",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.tvposter.net%2Fposters%2Fhow_i_met_your_mother_2005_4157_poster.jpg&f=1&nofb=1",
        description: "How I Met Your Mother is an American sitcom, created by Craig Thomas and Carter Bays for CBS. The series, which ran from 2005 to 2014, follows the main character, Ted Mosby, and his group of friends in New York City's Manhattan.",
        rating: 4,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/yOe4_kdqsmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 4,
        title:"Dark Web: Cicada 3301",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi2.wp.com%2Fwww.iconvsicon.com%2Fwp-content%2Fuploads%2F2021%2F01%2FDark-Web-Cicada-3301-scaled.jpg%3Ffit%3D1791%252C2560%26ssl%3D1&f=1&nofb=1",
        description: "Dark Web: Cicada 3301 is an action-comedy thriller film directed by Alan Ritchson, in his directorial debut, who co-wrote the script with Joshua Montcalm. Inspired by the eponymous organization, it stars Jack Kesy, Conor Leslie, Ron Funches, and Ritchson.",
        rating: 2,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/eXsNr4DGzpI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 5,
        title:"Who Am I",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cinemamontreal.com%2Fimages%2Fposters%2F1000x1500%2F0%2Fwho-am-i-kein-system-ist-sicher-2014-orig-poster.jpg&f=1&nofb=1",
        description: "Who Am I is a 2014 German techno-thriller film directed by Baran bo Odar. It is centered on a computer hacker group in Berlin geared towards global fame. It was screened in the Contemporary World Cinema section at the 2014 Toronto International Film Festival. The film was shot in Berlin and Rostock.",
        rating: 5,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/5vnjheCqRIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 6,
        title:"Fight club ",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8lCIiP60Wbg2yd44SR0N9QHaLH%26pid%3DApi&f=1",
        description: "Fight Club is a 1999 American film directed by David Fincher and starring Brad Pitt, Edward Norton, and Helena Bonham Carter. It is based on the 1996 novel of the same name by Chuck Palahniuk. Norton plays the unnamed narrator, who is discontented with his white-collar job",
        rating: 4,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/qtRKdVHc-cE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 7,
        title:"Mortal Kombat",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8oQqUx1pTmgS_9coOSATCQHaK-%26pid%3DApi&f=1",
        description: "Mortal Kombat est un film américano-australien réalisé par Simon McQuoid et sorti en 2021. C'est une adaptation cinématographique de la série de jeux vidéo Mortal Kombat, et plus précisément de l'incarnation de la franchise développée par NetherRealm Studios",
        rating: 5,
        trailer: <iframe width="790" height="330" src="https://www.youtube.com/embed/NYH2sLid0Zc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
    ,
    {
        id: 8,
        title:"Baby Driver",
        myUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4xbxBLAz4Y39obqwQAcEiAHaJ4%26pid%3DApi&f=1",
        description: "Baby Driver is a 2017 action film written and directed by Edgar Wright. It stars Ansel Elgort as a getaway driver seeking freedom from a life of crime with his girlfriend Debora. Kevin Spacey, Jon Hamm, Eiza González, Jamie Foxx, and Jon Bernthal appear in supporting roles.",
        rating: 5,
        trailer: <iframe width="790" height="444" src="https://www.youtube.com/embed/D9YZw_X5UzQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }
]

const App = ()=>{
        
        const [movie,setMovie] = useState([...readyMovies])
        
        const title = useRef("")
        const description = useRef("")
        const rating = useRef(null)
        const myUrl = useRef ("")

        const addMovie = ()=>{
            setMovie(x=>[...x,{title:title.current.value,myUrl:myUrl.current.value,description:description.current.value,rating:parseInt(rating.current.value)}])
            console.log(
                title.current.value,
                description.current.value,
                rating.current.value,
                myUrl.current.value

            )
        }
    return(
        <>
                <div className="MovieList">
                    {movie.map(x=><Link to={`/Movie/${x.id}`}><MyMovieCard {...x}/></Link>)}
                </div>
                <div className="Addmovie">
                    <input ref={title} type="text" placeholder="title" /><br />
                    <input ref={description} type="text" placeholder="description" /><br />
                    <select ref={rating} name="rating"  id="">
                        <option value="5">{"⭐️".repeat(5)}</option>
                        <option value="4">{"⭐️".repeat(4)}</option>
                        <option value="3">{"⭐️".repeat(3)}</option>
                        <option value="3">{"⭐️".repeat(2)}</option>
                        <option value="1">⭐️</option>
                    </select><br />
                    <input ref={myUrl} type="text" placeholder="poster"/><br />

                    <button onClick={addMovie}>Add movie</button>
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
                    <h1>{"⭐️".repeat(rating<=5?rating:rating=5)}</h1>
                </div>
            </div>
        </>
    )
}

const Trailer = ({match})=>{
    return(
        <>
            <div className="Trailer">
                {readyMovies.map(x=> x.id === parseInt(match.params.id) ? x.trailer:null)}
                <br />
                <button><Link to={"/"}>Back Home</Link></button>
            </div>
        </>
    )
}

export default (match)=>{
    return(
        <BrowserRouter>
            <Route exact path={"/"} component={App}/>
            <Route path={"/Movie/:id"} component={Trailer}/>
        </BrowserRouter>
    )
}