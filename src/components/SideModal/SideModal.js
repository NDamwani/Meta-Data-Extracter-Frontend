import React from "react";
import "./SideModal.css";
import { ExternalLink, Info, X } from "react-feather";
import { Col, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { toggleDatabaseMock } from "../store";

function SideModal({ isOpen, toggleModal }) {
  const dispatch = useDispatch();
  const isDatabaseMocked = useSelector((state) => state.isDatabaseMocked);
  return (
    <div className={`side-modal ${isOpen ? "open" : ""}`}>
      <div className="modal-header">
        <h2>cart_campaign</h2>

        <button onClick={toggleModal} className="modal-close-button">
          <X size={24} />
        </button>
      </div>

      <div className="modal-content">
        <div className="info">
          <p>
            <Info
              size={15}
              color="orange"
              style={{ verticalAlign: "middle", paddingRight: "1px" }}
            />{" "}
            Last 2 commits scanned
          </p>
          <p>
            <Info
              size={15}
              color="orange"
              style={{ verticalAlign: "middle", paddingRight: "1px" }}
            />{" "}
            5 entry points identified
          </p>
        </div>

        <div className="form">
          <Row>
            <label htmlFor="selected-flow">Selected flow</label>
          </Row>
          <Row>
            <select id="selected-flow">
              <option value="POST/carts/{carts_id}" style={{ padding: "1px" }}>
                POST/carts/{"{carts_id}"}
              </option>
            </select>
          </Row>

          <fieldset className="dependencies">
            <legend>Dependencies</legend>
            <p className="paragraph">Select the ones you want to mock</p>
            <div className="dependency-list">
              <div className="dependency">
                <input type="checkbox" id="httpx" name="httpx" defaultChecked />
                <label htmlFor="httpx">
                  httpx
                  <ExternalLink size={16} className="dependency-icon" />
                </label>
              </div>
              <div className="dependency">
                <input
                  type="checkbox"
                  id="product_client"
                  name="product_client"
                  defaultChecked
                />
                <label htmlFor="product_client">
                  product_client
                  <ExternalLink size={16} className="dependency-icon" />
                </label>
              </div>
            </div>
          </fieldset>

          <fieldset className=" dependencies">
            <legend>Databases</legend>
            <div className="d-flex">
              <input
                type="checkbox"
                id="mock_database"
                name="mock_database"
                checked={isDatabaseMocked}
                onChange={() => dispatch(toggleDatabaseMock())}
              />
              <label htmlFor="mock_database">I want to mock databases</label>
            </div>
            <div className="d-flex">
              <input type="checkbox" id="mock_database" name="mock_database" />
              <label htmlFor="mock_database">
                I don't want to mock databases
              </label>
            </div>
          </fieldset>

          <div className="database-config">
            <input type="text" placeholder="Database User" />
            <input type="text" placeholder="Database Password" />
            <input type="text" placeholder="Database Hostname" />
          </div>
          <button type="submit">Save</button>
        </div>
      </div>
    </div>
  );
}

export default SideModal;
