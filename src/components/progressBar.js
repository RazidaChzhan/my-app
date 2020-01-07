import React from "react";

import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import "../../node_modules/react-circular-progressbar/dist/styles.css";
import '../index.css';


export default function ProgressBar(props) {
  // value get from props
  return (
      <div style={{ marginLeft: 150,
                    marginBottom: 40,
                    marginTop: 30, 
                    display: "flex",
                    width: "9%", 
                    paddingRight: 30}}>
        <CircularProgressbarWithChildren value={50}> 
          <div style={{backgroundColor: '#E6E8F0', borderRadius: 100, width: 120, height: 120}}>
            <p className="progressBarTxt">50% 
              <br></br>
              <div style={{marginLeft: 10,
                          fontSize: 14, 
                          fontFamily: 'Segoe UI', 
                          color: '#7A7A7A'}}>3 из 6
              </div>
            </p>
          </div>            
        </CircularProgressbarWithChildren>
      </div>
    );
}
  
