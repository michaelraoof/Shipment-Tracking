import axios from "axios";
const url = process.env.REACT_APP_BASE_URL || "https://tracking.bosta.co/shipments/track/";

export const getShipmentDetails = async ({ trackingId }: { trackingId: string }) => {
  let res;

  try {
    res = await axios({
      method: "get",
      url: url + trackingId,
    });
    if (res.status === 200) {
      return res.data;
    }
    return {};
    //     console.log(res);
  } catch (err) {
    console.error(err);
    return {};
  }
};
