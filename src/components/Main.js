const Main =(props)=>{

    return(
        <main>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                <div className="card">
                    <img src="https://via.placeholder.com/50x50"alt="placeholder img" className="img-fluid image card-img-top" />
                    <div className="card-body">
                        <h2 className="card-title">{props.heroName}</h2>
                        <ul className="list-group">
                            <li className="list-group-item">First Name: {props.firstName}</li>
                            <li className="list-group-item">Last Name: {props.lastName}</li>
                            <li className="list-group-item">Alias: {props.alias}</li>
                            <li className="list-group-item">Franchise: {props.franchise}</li>
                            <li className="list-group-item">Species: {props.species}</li>
                            <li className="list-group-item">Origin: {props.origin}</li>
                            <li className="list-group-item">First Apperance: {props.firstApp}</li>
                            <li className="list-group-item">Alignment: {props.alignment}</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </main>
    )


}

export default Main