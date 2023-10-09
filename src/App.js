import React, { Component } from 'react';

class ShippingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      shipperFullName: '',
      shipperAddress: '',
      shipperCity: '',
      shipperState: '',
      shipperZipCode: '',
      shipperCellPhone: '',
      shipperEmail: '',
      consigneeFullName: '',
      consigneeAddress: '',
      consigneeCity: '',
      consigneeState: '',
      consigneeCellPhone: '',
      consigneeEmail: '',
      numShipmentBoxes: 1,
      weight: '',
      deliveryOption: 'Pick up from Nigeria Office',
      pickupAddress: '',
      cargoDescription: '',
      includesLithiumBatteries: false,
      cargoValue: '',
      requiresInsurance: false,
      packageDetails: [],
      packageDetailsLithium: [],
      certifyNoDangerousGoods: false,
      agreeTerms: false,
      initials: '',
      additionalComments: '',
      submitted: false, // Initialize the submitted property  
    };
  }

  // Handle radio button click
  handleRadioClick = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: parseInt(value, 10) });
  };

  // Handle lithium battery checkbox change
  handleLithiumCheckboxChange = (e, index) => {
    const { checked } = e.target;
    const newLithiumState = [...this.state.packageDetailsLithium];
    newLithiumState[index] = checked;
    this.setState({ packageDetailsLithium: newLithiumState });
  };

  // Handle package details change
  handlePackageDetailsChange = (e, index) => {
    const { value } = e.target;
    const newPackageDetails = [...this.state.packageDetails];
    newPackageDetails[index] = value;
    this.setState({ packageDetails: newPackageDetails });
  };

  handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    this.setState({ [name]: val });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', this.state);
    this.setState({ submitted: true });
  };

  nextPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  prevPage = () => {
    this.setState((prevState) => ({
      currentPage: prevState.currentPage - 1,
    }));
  };

  renderPage1 = () => {
    return (
      <div>
        {/* Shipper's Full Name */}
        <div>
          <label>Shipper's Full Name:</label>
          <input
            type="text"
            name="shipperFullName"
            value={this.state.shipperFullName}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's Address */}
        <div>
          <label>Shipper's Address:</label>
          <input
            type="text"
            name="shipperAddress"
            value={this.state.shipperAddress}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's City */}
        <div>
          <label>Shipper's City:</label>
          <input
            type="text"
            name="shipperCity"
            value={this.state.shipperCity}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's State */}
        <div>
          <label>Shipper's State:</label>
          <input
            type="text"
            name="shipperState"
            value={this.state.shipperState}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's Zip Code */}
        <div>
          <label>Shipper's Zip Code:</label>
          <input
            type="text"
            name="shipperZipCode"
            value={this.state.shipperZipCode}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's Cell Phone */}
        <div>
          <label>Shipper's Cell Phone:</label>
          <input
            type="text"
            name="shipperCellPhone"
            value={this.state.shipperCellPhone}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Shipper's Email */}
        <div>
          <label>Shipper's Email:</label>
          <input
            type="email"
            name="shipperEmail"
            value={this.state.shipperEmail}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's Full Name */}
        <div>
          <label>Consignee's Full Name:</label>
          <input
            type="text"
            name="consigneeFullName"
            value={this.state.consigneeFullName}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's Address */}
        <div>
          <label>Consignee's Address:</label>
          <input
            type="text"
            name="consigneeAddress"
            value={this.state.consigneeAddress}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's City */}
        <div>
          <label>Consignee's City:</label>
          <input
            type="text"
            name="consigneeCity"
            value={this.state.consigneeCity}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's State */}
        <div>
          <label>Consignee's State:</label>
          <input
            type="text"
            name="consigneeState"
            value={this.state.consigneeState}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's Cell Phone */}
        <div>
          <label>Consignee's Cell Phone:</label>
          <input
            type="text"
            name="consigneeCellPhone"
            value={this.state.consigneeCellPhone}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Consignee's Email */}
        <div>
          <label>Consignee's Email:</label>
          <input
            type="email"
            name="consigneeEmail"
            value={this.state.consigneeEmail}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  };

  renderPage2 = () => {
    return (
      <div>
        {/* Number of Air Shipment Boxes */}
        <div>
          <label>Number of Air Shipment Boxes:</label>
          {[1, 2, 3, 4, 5].map((num) => (
            <label key={num}>
              <input
                type="radio"
                name="numShipmentBoxes"
                value={num}
                checked={this.state.numShipmentBoxes === num}
                onChange={this.handleRadioClick}
              />
              {num}
            </label>
          ))}
        </div>

        {/* Actual or Gross Weight */}
        <div>
          <label>Actual or Gross Weight:</label>
          <input
            type="text"
            name="weight"
            value={this.state.weight}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Delivery Option */}
        <div>
          <label>Delivery Option:</label>
          <select
            name="deliveryOption"
            value={this.state.deliveryOption}
            onChange={this.handleInputChange}
          >
            <option value="Pick up from Nigeria Office">Pick up from Nigeria Office</option>
            <option value="Door to Door (extra cost)">Door to Door (extra cost)</option>
            <option value="Airport to Airport">Airport to Airport</option>
          </select>
        </div>

        {/* Pickup Address */}
        <div>
          <label>Pickup Address:</label>
          <input
            type="text"
            name="pickupAddress"
            value={this.state.pickupAddress}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Cargo Description */}
        <div>
          <label>Cargo Description:</label>
          <textarea
            name="cargoDescription"
            value={this.state.cargoDescription}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Includes Lithium Batteries */}
        <div>
          <label>Does your shipment include lithium batteries?</label>
          <input
            type="checkbox"
            name="includesLithiumBatteries"
            checked={this.state.includesLithiumBatteries}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Total Value of Cargo */}
        <div>
          <label>Total Value of Cargo:</label>
          <input
            type="text"
            name="cargoValue"
            value={this.state.cargoValue}
            onChange={this.handleInputChange}
          />
        </div>

        {/* Requires Insurance */}
        <div>
          <label>Would you like insurance for your air freight delivery?</label>
          <input
            type="checkbox"
            name="requiresInsurance"
            checked={this.state.requiresInsurance}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  };

  renderPage3 = () => {
    return (
      <div>
        {/* Package Details */}
        <div>
          <label>Details (Package x):</label>
          {Array.from({ length: this.state.numShipmentBoxes }, (_, index) => (
            <div key={index}>
              <label>{`Package ${index + 1}`}</label>
              <input
                type="text"
                name={`packageDetails[${index}]`}
                value={this.state.packageDetails[index] || ''}
                onChange={(e) => this.handlePackageDetailsChange(e, index)} // Handle package details change
              />
              <label>{`Contains Lithium Batteries:`}</label>
              <input
                type="checkbox"
                name={`packageDetailsLithium[${index}]`}
                checked={this.state.packageDetailsLithium[index] || false}
                onChange={(e) => this.handleLithiumCheckboxChange(e, index)} // Handle lithium checkbox change
              />
            </div>
          ))}
        </div>

        {/* Certification */}
        <div>
          <label>
            I CERTIFY THAT THIS SHIPMENT DOES NOT CONTAIN ANY DANGEROUS GOODS...
            <input
              type="checkbox"
              name="certifyNoDangerousGoods"
              checked={this.state.certifyNoDangerousGoods}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        {/* Agreement */}
        <div>
          <label>
            I agree
            <input
              type="checkbox"
              name="agreeTerms"
              checked={this.state.agreeTerms}
              onChange={this.handleInputChange}
            />
          </label>
        </div>

        {/* Initials */}
        <div>
          <label>Initials:</label>
          <input
            type="text"
            name="initials"
            value={this.state.initials}
            onChange={this.handleInputChange}
          />
        </div>
      </div>
    );
  };
  
  renderPage4 = () => {
    return (
      <div>
        {/* Additional Comments */}
        <div>
          <label>Additional Comments:</label>
          <textarea
            name="additionalComments"
            value={this.state.additionalComments}
            onChange={this.handleInputChange}
          />
        </div>
  
        {/* Submit Button */}
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  };

  renderPage5 = () => {
    return (
      <div>
        {/* Thank You Message */}
        {this.state.submitted && (
          <div>
            <p>Thank you for submitting the form!</p>
          </div>
        )}
      </div>
    );
  };

  render() {
    const { currentPage } = this.state;

    return (
      <div>
        <h1>Shipping Form - Page {currentPage}</h1>
        <form onSubmit={this.handleSubmit}>
          {currentPage === 1 && this.renderPage1()}
          {currentPage === 2 && this.renderPage2()}
          {currentPage === 3 && this.renderPage3()}
          {currentPage === 4 && this.renderPage4()}
          {currentPage === 5 && this.renderPage5()}

          {/* Buttons */}
          <div>
            {currentPage !== 1 && (
              <button type="button" onClick={this.prevPage}>
                Previous
              </button>
            )}

            {/* Show "Submit" button on page 4 and "Next" button on all other pages */}
            {currentPage === 4 ? (
              <button type="submit">Submit</button>
            ) : (
              <button type="button" onClick={this.nextPage}>
                Next
              </button>
            )}
          </div>
        </form>
      </div>
    );
  }
}




export default ShippingForm;
