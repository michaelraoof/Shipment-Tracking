import React from "react";
import { getActiveLanguage } from "../functions/languageMapper";
import { useSelector, useDispatch } from "react-redux";
import * as reduxFunctions from "../redux/shipment";
import Arrow from "../imgs/arrow.svg";

//const styles={{}}
function Header() {
  const dispatch = useDispatch();

  const language = useSelector((state: { shipment: { language: string } }) => state.shipment.language);
  const languagePopUp = useSelector((state: { shipment: { languagePopUp: boolean } }) => state.shipment.languagePopUp);

  return (
    <div className="container mx-auto flex flex-row justify-between">
      <img src={getActiveLanguage[language].logo} width={120} height={36} alt="bosta logo" />
      <div className="flex flex-col items-left">
        <div className=" mt-[50px] ">
          <div
            onClick={(e) => {
              e.stopPropagation();
              dispatch(reduxFunctions.shipmentSlice.actions.togglePopUp());
            }}
            className=" flex flex-row cursor-pointer w-[fit-content] text-[16px] m-[0px] p-[0px] hover:text-[#E30613] active:text-[#E30613]"
          >
            <div>{getActiveLanguage[language].language.shortcut}</div>
            <img
              width={10}
              height={6}
              className={`ml-[6px] active:-rotate-90 ${language == "AR" ? "hover:rotate-90" : "hover:-rotate-90 "}`}
              src={Arrow}
              alt="arrow"
            />
          </div>
        </div>
        {
          <div
            style={{ visibility: languagePopUp ? "visible" : "hidden" }}
            className="text-[14px] flex flex-col bg-[#fff] p-[8px] rounded shadow-2xl"
          >
            <div className="cursor-pointer py-[5px] px-[12px] hover:bg-[#f5f5f5] m-[0px]">{getActiveLanguage[language].language.names[0]}</div>
            <div
              onClick={() => {
                dispatch(reduxFunctions.shipmentSlice.actions.changeLanguage());
              }}
              className="cursor-pointer py-[5px] px-[12px] hover:bg-[#f5f5f5] m-[0px]"
            >
              {getActiveLanguage[language].language.names[1]}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default Header;
