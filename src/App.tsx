import "./App.css";
import { useEffect } from "react";
import { getShipmentDetails } from "./customaxios/functions";
import { RootObject } from "./interfaces/interface";
import * as reduxFunctions from "./redux/shipment";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import { getActiveLanguage } from "./functions/languageMapper";
import WarnningIcon from "./imgs/warnning.svg";
function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: { shipment: RootObject }) => state.shipment);
  const language = useSelector((state: { shipment: { language: string } }) => state.shipment.language);
  const TrackingNumber = useSelector((state: { shipment: { TrackingNumber: string } }) => state.shipment.TrackingNumber);
  useEffect(() => {
    if (TrackingNumber != "") {
      getShipmentDetails({ trackingId: TrackingNumber }).then((res) => {
        dispatch(reduxFunctions.shipmentSlice.actions.setData(res));
        console.log(res);
      });
    }
  }, [TrackingNumber]);

  return (
    <div
      onClick={() => {
        dispatch(reduxFunctions.shipmentSlice.actions.closePopUp());
      }}
      style={language === "AR" ? { fontFamily: "cairo-500", direction: "rtl" } : { direction: "ltr" }}
      className="App flex flex-col "
    >
      <Header></Header>
      <SearchBar></SearchBar>
      {data.TrackingNumber != "" && data.CurrentStatus ? (
        <div className="flex flex-col items-center">
          <div className="text-[#667085] mt-[100px] text-[16px]">{getActiveLanguage[language].shipmentNo + " " + data.TrackingNumber}</div>
          {
            //data.CurrentStatus.state === "DELIVERED" ?

            <div className="flex flex-col justify-center items-center">
              <div className="font-[cairo-700] text-[40px] text-center	">
                {data.CurrentStatus.state === "DELIVERED"
                  ? getActiveLanguage[language]["state"][1].header
                  : getActiveLanguage[language]["state"][0].header}
              </div>
              <div className="flex flex-row mt-[40px]">
                <hr className="bg-[#0098a5] rounded w-[20vw] h-[6px] mr-[5px]" />
                <hr className="bg-[#0098a5] rounded w-[20vw] h-[6px] mr-[5px]" />
                {data.CurrentStatus.state === "DELIVERED" ? (
                  <hr className="bg-[#0098a5] rounded w-[20vw] h-[6px] mr-[5px]" />
                ) : (
                  <hr className="bg-[#d9f4f8] rounded w-[20vw] h-[6px] mr-[5px]" />
                )}
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row justify-center text-[16px] mt-[30px]">
                  <div className="text-[14px]">
                    {data.CurrentStatus.state === "DELIVERED"
                      ? getActiveLanguage[language]["state"][1].paragraph
                      : getActiveLanguage[language]["state"][0].header}
                  </div>
                  <div className="text-[#0098a5] mx-[8px]">{new Date(data.CurrentStatus.timestamp).toDateString()}</div>
                </div>
                <div>
                  <div className="text-[12px] text-[#667085] flex flex-row justify-center">
                    {getActiveLanguage[language].dateUpdateFirst +
                      ((Date.now() - new Date(data.CurrentStatus.timestamp).getTime()) / (1000 * 3600 * 24)).toFixed(0) +
                      getActiveLanguage[language].dateUpdateSecond}
                  </div>
                  <hr className="w-[70vw]" />
                </div>

                <div>
                  <div className="text-[#667085] text-[14px] my-[20px]">{getActiveLanguage[language].log}</div>
                  <div className="flex flex-row items-center">
                    <div className="w-[16px] h-[16px] rounded-full bg-[#d0d5dd]"></div>
                    <div className="text-[16px] ml-[10px]">{new Date(data.CurrentStatus.timestamp).toDateString()}</div>
                  </div>
                  <div className="flex flex-row">
                    <div className="flex flex-row mx-[7px] " style={{ height: "100px", width: "1px", borderLeft: "1px solid #f0f0f0" }}></div>
                    <div
                      style={{
                        fontSize: "14px",
                        width: "fit-content",
                        borderRadius: "8px",
                        border: "1px solid #e4e7ec",
                        padding: "8px 16px",
                        marginBottom: "48px",
                      }}
                    >
                      {data.CurrentStatus.state === "DELIVERED"
                        ? getActiveLanguage[language]["state"][1].paragraph
                        : getActiveLanguage[language]["state"][0].paragraph}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      ) : (
        <div
          style={{ maxWidth: "600px", borderRadius: "4px", border: "1px solid #fecdca" }}
          className="bg-[#fef3f2] p-[16px] flex flex-row text-[14px] items-start  justify-center mx-auto"
        >
          <img src={WarnningIcon} alt="" />
          <div>{getActiveLanguage[language].notFound}</div>
        </div>
      )}
    </div>
  );
}

export default App;
