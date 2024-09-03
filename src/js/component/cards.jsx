import React from 'react';
import { Card } from "./card";

const CardsApp = () => {
    return (
        <div className="container d-flex flex-wrap justify-content-around">
            <div id="destinations" className="row mb-4">
                <div className="col-md-3">
                    <Card
                        title="The Eiffel Tower’s Timeless Allure"
                        url="https://picsum.photos/id/234/400/250"
                        description="A charming view of the Eiffel Tower rises above Parisian rooftops, evoking the city's romantic ambiance and rich cultural history."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Escape to Paradise"
                        url="https://picsum.photos/id/450/400/250"
                        description="Discover the serenity of a turquoise lake surrounded by the majesty of towering mountains, a perfect destination for seekers of adventure and peace."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Sunset Adventure"
                        url="https://picsum.photos/id/390/400/250"
                        description="Experience a blissful escape with friends at a serene poolside, where the golden sunset kisses the tranquil waters, creating a picturesque setting for cherished moments."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="City Lights Getaway"
                        url="https://picsum.photos/id/249/400/250"
                        description="Escape to a serene urban oasis where a luminous bridge arches over tranquil waters, leading to a cityscape adorned with twinkling skyscrapers under the starry night sky."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Card
                        title="Serene Mountain Escape"
                        url="https://picsum.photos/id/235/400/250"
                        description="Discover tranquility by a pristine lake, embraced by snow-capped peaks and lush forests, in this breathtaking mountain retreat."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Elevate Your Escape"
                        url="https://picsum.photos/id/174/400/250"
                        description="Soar above the ordinary, land in paradise."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Skyline Escapes"
                        url="https://picsum.photos/id/391/400/250"
                        description="Embrace the twilight adventure, where city lights meet starry nights, and urban peaks beckon bold explorers."
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
                <div className="col-md-3">
                    <Card
                        title="Discover Serenity"
                        url="https://picsum.photos/id/547/400/250"
                        description="Unveil the Majestic Mountains and Embrace the Wilderness!"
                        buttonURL="#destinations"
                        buttonLabel="Find out more!"
                    />
                </div>
            </div>
        </div>
    )
}
export default CardsApp;
