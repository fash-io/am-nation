import React from "react";
import Carousel from "../components/Carousel";
import { events } from "../constants";

export default function booking() {
  return (
    <>
      <Carousel carouselItems = {events}/>
      <div>
        <div className="container-lg container-1" id="booking">
          <div className="text-head text-center d-flex justify-content-center align-items-center my-5">
            <h2 className="fw-bold border-bottom pb-3 about position-relative">
              BOOK NOW
            </h2>
          </div>
          <div className="row">
            <form action="" className="d-flex flex-column w-100">
              <div className="form w-100 p-lg-5 p-2">
                <div className="form-floating my-3">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter name"
                    className="form-control form-focus"
                  />
                  <label htmlFor="name" className="form-label">
                    Name:
                  </label>
                </div>

                <div className="form-floating my-3">
                  <input
                    type="text"
                    id="num"
                    name="num"
                    placeholder="Phone"
                    className="form-control form-focus"
                  />
                  <label htmlFor="num" className="form-label">
                    Phone Number:
                  </label>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    placeholder="mail"
                    className="form-control form-focus"
                  />
                  <label htmlFor="mail" className="form-label">
                    Email:
                  </label>
                </div>
                <div className="my-3">
                  <select
                    className="form-select form-focus"
                    aria-label="Default select example"
                  >
                    <option selected>Select Concert</option>
                    <option value="1">CIRCUS MAXIMUS TOUR 2024</option>
                    <option value="2">AFRONATION 2024</option>
                  </select>
                </div>
                <div className="form-floating my-3">
                  <input
                    type="number"
                    className="form-control"
                    id="tickets"
                    placeholder="Enter number of tickets"
                    required
                  />
                  <label htmlFor="tickets" className="form-label">
                    Number of Tickets
                  </label>
                </div>
                <div className="form-floating mb-3">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Any special requests or questions?"
                  ></textarea>
                  <label htmlFor="message" className="form-label">
                    Any special requests or questions?
                  </label>
                </div>
                <div className="form-floating my-3">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions1"
                      id="inlineRadio11"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio11">
                      TABLE
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions1"
                      id="inlineRadio21"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio21">
                      V-VIP
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions1"
                      id="inlineRadio31"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio31">
                      VIP
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions1"
                      id="inlineRadio41"
                      value="option4"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio41">
                      Regular
                    </label>
                  </div>
                </div>

                <div className="my-3 d-flex justify-content-end">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      MasterCard
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      VISA
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      Bank Transfer
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      value="option3"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      BITCOIN
                    </label>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-5">
                  <button type="submit" className="btn btn-outline-primary px-4">
                    {" "}
                    Submit Booking{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
