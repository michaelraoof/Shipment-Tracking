import React from "react";
import { getActiveLanguage } from "../functions/languageMapper";
import { useSelector, useDispatch } from "react-redux";
import searchBarIcon from "../imgs/searchIcon.svg";
import * as reduxFunctions from "../redux/shipment";

function SearchBar() {
  const language = useSelector((state: { shipment: { language: string } }) => state.shipment.language);
  const searchBar = useSelector((state: { shipment: { searchBar: string } }) => state.shipment.searchBar);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center">
      <div>{getActiveLanguage[language].header}</div>

      <div className="flex flex-row">
        <form
          style={{
            minHeight: "88px",
            backgroundColor: "white",
            maxWidth: "100%",
          }}
          className=" flex flex-col justify-center"
          onSubmit={(event) => {
            event.preventDefault();

            dispatch(reduxFunctions.shipmentSlice.actions.setTrackingNumber(searchBar));
          }}
        >
          <div className="flex flex-row justify-between items-center">
            <div className=" mr-6 my-2 flex flex-row">
              <input
                className="w-[25vw] outline-0 shadow rounded-lg  p-3 pr-[50px] pl-[24px] ml-[50px] text-[#717579] not-italic	 text-[14px] font-[400] leading-[17px] focus:text-[#374151] focus:font-[500] border border-[#e4e7ec] focus:border-[#26B7CD]"
                placeholder={getActiveLanguage[language].searchBarPlaceHolder}
                value={searchBar}
                onChange={(e) => {
                  dispatch(reduxFunctions.shipmentSlice.actions.setSearchBar(e.target.value));
                }}
              />
              {language === "EN" ? (
                <div
                  onClick={() => {
                    dispatch(reduxFunctions.shipmentSlice.actions.setTrackingNumber(searchBar));
                  }}
                  className="bg-[#e30613] cursor-pointer  rounded-r-lg w-[50px]  ml-[-40px] flex items-center justify-center   "
                >
                  <img alt="search icon" width={30} height={30} src={searchBarIcon}></img>
                </div>
              ) : (
                <div
                  onClick={() => {
                    dispatch(reduxFunctions.shipmentSlice.actions.setTrackingNumber(searchBar));
                  }}
                  className="bg-[#e30613] rounded-l-lg cursor-pointer  w-[50px]  mr-[-70px] flex items-center justify-center   "
                >
                  <img alt="search icon" width={30} height={30} src={searchBarIcon}></img>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
