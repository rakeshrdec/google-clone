import React, { useState } from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@material-ui/icons/Search";
//import { Description, LocalOffer } from "@material-ui/icons";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOffer from "@material-ui/icons/LocalOffer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RoomIcon from "@material-ui/icons/Room";

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();

  // LiVE API CALL
  const { data } = useGoogleSearch(term);

  // const data = Response; // this was MOCK API data

  //  https://developers.google.com/custumersearchtom-search/v1/using_rest

  //  https://cse.google.com/cse/create/new

  console.log(data);

  return (
    <div className="searchpage">
      <div className="searchpage_header">
        {/* <h1>{term}</h1> */}
        <Link to="/">
          <img
            className="searchpage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>

        <div className="searchpage_headerBody">
          <Search hidebuttons />

          <div className="searchpage_options">
            <div className="searchpage_optionsLeft">
              <div className="searchpage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage_option">
                <DescriptionIcon />
                <Link to="/news">News</Link>
              </div>
              <div className="searchpage_option">
                <ImageIcon />
                <Link to="/images">images</Link>
              </div>
              <div className="searchpage_option">
                <LocalOffer />
                <Link to="/shopping">shopping</Link>
              </div>
              <div className="searchpage_option">
                <RoomIcon />
                <Link to="/maps">maps</Link>
              </div>
              <div className="searchpage_option">
                <MoreVertIcon />
                <Link to="/more">more</Link>
              </div>
            </div>

            <div className="searchpage_optionsRight">
              <div className="searchpage_option">
                <Link to="/settings">settings</Link>
              </div>
              <div className="searchpage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {true && (
        <div className="searchpage_results">
          <p className="searchpage_resultsCounts">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchpage_result">
              {/* <a href={item.link}>{item.displayLink} ^</a> */}
              <a className="searchpage_resultlink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && (
                  <img
                    className="searchpage_resultimage"
                    src={
                      item.pagemap?.cse_image?.length > 0 &&
                      item.pagemap?.cse_image[0]?.src
                    }
                    alt=""
                  />
                )}
                {item.displayLink} {`>`}
              </a>

              <a className="searchpage_resultTitle" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="searchpage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchPage;
