import React from "react";
import {Link} from "react-router-dom"

import image from "../design/vogue_merry.png"

import characters from "../__mocks__/data.json"
import aboutData from "../__mocks__/aboutData";

import Thumbnails from "../components/Thumbnails";
import Herobanner from "../components/Herobanner";

const equipage = aboutData.mugi

const Mugiwaras = () => {
    return (
        <div className="home">
            <div className="home_banner">
                <Herobanner image={image} title={equipage} />
            </div>
            <section className="home__mugiwaras">
                {characters.map((character) => {
                    return (
                        <article key={character.id}>
                            <Link to={`/characters/${character.id}`}>
                                <Thumbnails image={character.picture} name={character.name} nickname={character.nickname} bounty={character.bounty}/>
                            </Link>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Mugiwaras