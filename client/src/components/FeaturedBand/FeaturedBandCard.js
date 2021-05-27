import React, { useState, useEffect } from "react";
import API from "../../utils/API"
import "./FeaturedBand.css";
import "../../App.css";

function FeaturedBandCard() {
    return (
        <>
            <div className="feat-band-container card">
                <div className="card-header">Featured Band</div>
                <h3 className="card-title">Yusuf/ CatDog Stevens</h3>
                <h5 className="card-subtitle">Location: Next Door!</h5>
                <h5 className="card-subtitle">Genre: A good one</h5>
                <p className="card-text"> One fine day with a woof and a purr
                A baby was born and it caused a little stir
                No blue buzzard, no three-eyed frog
                Just a feline canine little CatDog, CatDog, CatDog
                Alone in the world was a little CatDog.
                <br/>
                Out on the road or back in town
                All kinda critters putting CatDog down
                Gotta rise above it, gotta try to get along
                Gotta walk together, gotta sing this song
                CatDog, CatDog, Alone in the world was a little CatDog,
                CatDog (CatDog), CatDog (CatDog) Alone in the world was a little CatDog</p>
            </div>
        </>
    )
}

export default FeaturedBandCard