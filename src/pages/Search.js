import "./Search.css";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";

function Search({ hidebuttons=false }) {
    const [{}, dispatch ] = useStateValue();
    

    const [input , setInput] =useState("");
    const history = useHistory();
    const search = (e) => {
        e.preventDefault();

        console.log('you have submitted the button now');
        dispatch ({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');
    };
    
    return (
        <form className='search'>
            <div className='search_input'>
                <SearchIcon  className="search_inputIcon"/>
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />   
            </div>

        {!hidebuttons ? (
            <div className="search_buttons">
                <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                <Button variant='outlined'>I'm feeling Lucky</Button>
            </div>
        ): (
            <div className="search_buttonsHidden">
                <Button type='submit' variant='outlined' onClick={search}>Google Search</Button>
                <Button variant='outlined'>I'm feeling Lucky</Button>
            </div>
        )
        }
        </form>
    );

};

export default Search;