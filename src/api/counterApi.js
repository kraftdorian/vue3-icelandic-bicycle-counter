import axios from "axios";

export default {
  getCounter() {
    return axios.get("http://apis.is/cyclecounter").catch(() =>
      Promise.resolve({
        results: [
          {
            DayCount: "154",
            YearCount: "31853",
            Time: "16:48",
            Date: "18. Sep 2013"
          }
        ]
      })
    );
  }
};
