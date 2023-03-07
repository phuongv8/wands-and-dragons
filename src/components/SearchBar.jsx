import { ClickAwayListener } from "@mui/material";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useProductsProvider } from "../utils/ProductProvider";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const { inventory } = useProductsProvider();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <div>
      <input
        label="Search"
        type="select"
        placeholder="Search For Item"
        onChange={(event) => {setSearchTerm(event.target.value); handleClick ()}}
      />
      <ClickAwayListener onClickAway={handleClickAway}>
        <div className={"search-result"+ (open?' active': '')}>
          <div className="inner">
            {inventory
              .filter((item) => {
                if (searchTerm === "") {
                  return;
                } else if (
                  Object.keys(item).some((key) =>
                    item[key]
                      .toString()
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  )
                ) {
                  return item;
                }
              })
              .map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <Link to="/productdetail" state={{ item }}>
                      <option >{item.name}</option>
                    </Link>
                    <span className="product-line-divider"></span>
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </ClickAwayListener>
    </div>
  );
};

export default SearchBar;
