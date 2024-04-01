import React from "react";
import StoreCard from "../../components/Clients/StoreCard";

function Joke() {
  return (
    <div>
      <StoreCard />
      <div className="joke">
        <p className="joke-div text-black mt-5" style={{ fontSize: 15 }}>
          A child asked his father, "How were people born?" So his father said,
          "Adam and Eve made babies, then their babies became adults and made
          babies, and so on." The child then went to his mother, asked her the
          same question and she told him, "We were monkeys then we evolved to
          become like we are now." The child ran back to his father and said,
          "You lied to me!" His father replied, "No, your mom was talking about
          her side of the family."
        </p>
      </div>
      <div className="border-bottom mt-4 mb-4"></div>

      <div className="btn-gr mt-5">
        <button
          type="button"
          className="btn"
          style={{ backgroundColor: "#2C7EDB" }}
        >
          This is Funny!
        </button>
        <button
          type="button"
          className="btn ms-3"
          style={{ backgroundColor: "#29B363" }}
        >
          This is not Funny!
        </button>
      </div>
      <div className="border-bottom mt-5"></div>
      <footer className="mt-5">
        <div className="foot">
          <div className="foot-div">
            <small>
              {" "}
              This website is created as part of Hisolutions program. The
              material contaied on this website are provided for general
              infomation only and do not contitute any form of advice. HLS
              assumes no responsibility for the accuracy of any particular
              statement and accept no liability for any loss or damage which may
              arise reliance on the information contained on this site
            </small>
            <p className="text-bold">Copyright 2021 HLS </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Joke;
