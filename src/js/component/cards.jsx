import React from 'react';
import { Card } from "./card";

export const App = () => {
    return (
        <div className="container d-flex flex-wrap justify-content-around">
            <div className="row mb-4">
                <div className="col-md-3"> 
                    <Card
                        title="Prueba 1"
                        url="https://picsum.photos/id/234/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 2"
                        url="https://picsum.photos/id/450/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 3"
                        url="https://picsum.photos/id/390/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 4"
                        url="https://picsum.photos/id/249/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Card
                        title="Prueba 5"
                        url="https://picsum.photos/id/235/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 6"
                        url="https://picsum.photos/id/174/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 7"
                        url="https://picsum.photos/id/391/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Prueba 8"
                        url="https://picsum.photos/id/547/400/250"
                        description="Esto es una prueba"
                        buttonURL="https://www.google.com/"
                        buttonLabel="Find out more!"
                    />
                </div>
            </div>
        </div>
    )
}
