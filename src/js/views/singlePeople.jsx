import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Image from "../../img/imagenstar.png";

import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePeople = props => {
    
    return (
        <div className="jumbotron">
              {/* <h1>El nombre de la  persona es: {people.name ? people.name : ""}</h1> */}
              <img src={props.image || Image} className="card-img-top singleim" alt="..." />
            <p>{props.name}</p>
            <Link to="/">
                <span className="btn btn-primary btn-lg" href="#" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
export default SinglePeople;