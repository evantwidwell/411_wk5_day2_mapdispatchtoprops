import React from 'react'
import { Card, CardContent, CardActions, Divider } from '@material-ui/core'
import { Link } from 'react-router-dom'


const Home = (props) => {
    return (
        <div className="card-container">
            {/* Change cars to props.cars and remove the cars.json import above */}
            {props.listings.map((listing, idx) => (
                <Card key={idx} className="card">
                    <CardContent className="text-gray">
                        <span>{listing.name.toUpperCase()}</span>
                        <ul>
                        <li>Description: {listing["description"]}</li>
                        <li>Address: {listing["address"]}</li>
                        <li>Hours: {listing["hours"]}</li>
                        </ul>
                    </CardContent>
                    <Divider />
                    {/* <CardActions style={{ color: 'mediumblue' }}>
                        <Link to={`/car/${car.id}`}>See More Details</Link>
                    </CardActions> */}
                </Card>
            ))}
        </div>
    )
}

export default Home