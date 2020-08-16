import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Carousel } from "antd";
const { Header, Content, Footer, Sider } = Layout;

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div
          className="site-layout-background"
          style={{ padding: 24, textAlign: "center" }}
        >
          <div style={{ float: "right", marginRight: "2rem" }}>
            <img
              src="https://content3.jdmagicbox.com/comp/ahmedabad/x5/079pxx79.xx79.150917134520.v1x5/catalogue/panah-foundation-sahijpur-bogha-ahmedabad-charitable-trusts-2td45kseu7.jpg"
              alt="panah"
            />
          </div>
          <h1
            style={{
              fontSize: "10rem",
              fontFamily: "Montserrat",
              fontWeight: "bold",
              marginTop: "0px",
              position: "relative",
            }}
          >
            PANAH
          </h1>
          <h1 style={{ fontSize: "8rem", fontFamily: "Montserrat" }}>
            FOUNDATION
          </h1>
        </div>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>
              Policy initiatives in agricultural marketing division
              <h5 style={{ color: "#ffff" }}>
                Information on the policy initiatives in agricultural marketing
                division is provided by the Department of Agriculture and
                Cooperation under the Ministry of Agriculture. Detailed
                information on the Marketing Research and Information Network
                (MRIN), construction of rural godowns, marketing reforms, Small
                Farmers Agribusiness Consortium (SFAC), strengthening of
                agricultural marketing infrastructure, grading and
                standardization, etc. is provided...
              </h5>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Information on Commodities profile by Department of Agriculture
              and Co-operation
              <h5 style={{ color: "#ffff" }}>
                Find detailed information about commodities by Directorate of
                Marketing and Inspection, Department of Agriculture and
                Co-operation. Information is given about the commodity profiles
                such as manual on good agricultural marketing practices for
                cotton, post-harvest profile of grapes, post-harvest profile of
                chilli and post-harvest profile of mandarin, etc.
              </h5>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Watershed Atlas of India
              <h5 style={{ color: "#ffff" }}>
                Find the Watershed Atlas of India by the Soil and Land Use
                Survey of India (SLUSI). The digital atlas will provide
                information on spatial distribution of Water Resource Regions,
                Basins, Catchments, Sub Catchments and Watersheds. The atlas
                also provides methodological details and guidance on utilisation
                of atlas for locating watersheds. Users can buy the atlas by
                referring to the contact details provided online.
              </h5>
            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>
              Farmers' Portal of India by Department of Agriculture and
              Cooperation
              <h5 style={{ color: "#ffff" }}>
                The Farmers' Portal of the Department of Agriculture &
                Cooperation is a platform for farmers to seek any information
                related to agriculture. Detailed information on farmers’
                insurance, agricultural storage, crops, extension activities,
                seeds, pesticides, farm machineries, etc. is provided. Details
                of fertilizers, market prices, package and practices,
                programmes, welfare schemes are also given. Block level details
                related to soil fertility...
              </h5>
            </h3>
          </div>
        </Carousel>
      </>
    );
  }
}

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
