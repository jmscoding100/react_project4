import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";



 




const App =()=>{

const hero = [
        {
            id: 1,
            heroName: 'Batman',
            firstName: 'Bruce',
            lastName: 'Wayne',
            alias: 'The Dark Knight',
            franchise: 'DC',
            species: 'human',
            origin: 'Gotham',
            firstApp: 1939,
            alignment: 'Hero',
            imgUrl: 'batman'
        },
        {
            id: 2,
            heroName: 'Spider-Man',
            firstName: 'Miles',
            lastName: 'Morales',
            alias: 'The Ultimate Spider-Man',
            franchise: 'Marvel',
            species: 'mutate',
            origin: 'New York City',
            firstApp: 2011,
            alignment: 'Hero',
            imgUrl: 'spider_man_1'
        },
        {
            id: 3,
            heroName: 'Spider-Man',
            firstName: 'Peter',
            lastName: 'Parker',
            alias: 'The Friendly Neighborhood Spider-Man',
            franchise: 'Marvel',
            species: 'mutate',
            origin: 'New York City',
            firstApp: 1962,
            alignment: 'Hero',
            imgUrl: 'spider_man_2'
        }
    ]



const mainComponents = hero.map(obj =>{
        return (
                    <Main  
                        key={obj.id} 
                        heroName={obj.heroName} 
                        firstName={obj.firstName} 
                        lastName={obj.lastName} 
                        alias={obj.alias}
                        franchise={obj.franchise} 
                        species={obj.species} 
                        origin={obj.origin} 
                        firstApp={obj.firstApp} 
                        alignment={obj.alignment} 
                        imgUrl={obj.imgUrl} 
                    />
                )
    })




    return(
        <>
            <Header />
            {mainComponents}
            <Footer />
        </>
    )
}


export default App