import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import StudentsList from "../StudentsList/StudentsList";

function App() {

  const [data, setData] = useState({})

  fetch('https://script.googleusercontent.com/a/macros/elbrusboot.camp/echo?user_content_key=dripqz_YExjv4RweIkgi_7P6zXrN1zWe5RU-AzHwqmmnZMAc_arf30QIyi9lqO1rGKJcNJcTzFCfo_fmTZRitnWocvZ6hohcOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKDTXnaaxiT03zlwN40MseEAQrSO3J573srbGw20PbcAaloUeW2DTwx9frF6zXU0Gw82ij_7wNugInBE7WtLIQV3nZKXPEDR6ESCJ8KzVlRkT3Bt6jEJZL9IP_iSHEWaY-2agQEneoX2wQ&lib=MWtyg7Q3wpddVdEmVJUdr8sB61X_XfA8E')
    .then(response => response.json())
    .then(data => console.log(data))

  return (
    <section className="container" >
      <h1 className="text-center">Elbrus Bonus Points</h1>

      {/* <StudentsList studentList={data.result} /> */}
    </section>
  );
}

export default App;
