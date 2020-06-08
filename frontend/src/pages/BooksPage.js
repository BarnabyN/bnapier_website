import React from "react";
import CustomNavbar from "../components/CustomNavbar";

export default function BookPage() {
  // somrthing
  return (
    <div>
      <CustomNavbar />
      <div class="main">
        <p>
          I keep my reading list in an Excel file, which is embedded* below:
        </p>
        <iframe
          width="100%"
          height="800px"
          frameborder="0"
          scrolling="no"
          title="Reading List"
          src="https://onedrive.live.com/embed?resid=AD0C145F677E2286%21109521&authkey=%21AO4dPWGGpWQfJlI&em=2&wdAllowInteractivity=False&Item=Table1&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True"
        ></iframe>
        <p>* Yes, I am that lazy</p>
      </div>
    </div>
  );
}
