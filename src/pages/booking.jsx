import Carousel from "../components/Carousel";
import { events } from "../constants";

const Booking = () => {
  return (
    <>
      <Carousel carouselItems={events} />

      <div className="container mx-auto px-4 py-8" id="booking">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold border-b-4 border-primary pb-3 inline-block relative">
            BOOK NOW
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name:"
                  className="form-input w-full p-3 border rounded-md shadow-sm"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="num"
                  name="num"
                  placeholder="Phone Number:"
                  className="form-input w-full p-3 border rounded-md shadow-sm"
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="Email"
                  className="form-input w-full p-3 border rounded-md shadow-sm"
                />
              </div>

              <div>
                <select
                  className="form-select w-full p-3 border rounded-md shadow-sm"
                  aria-label="Select Concert"
                >
                  <option>Select Concert</option>
                  {events.map((event, index) => (
                    <option value={index + 1} key={index}>
                      {event.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="relative">
                <input
                  type="number"
                  id="tickets"
                  className="form-input w-full p-3 border rounded-md shadow-sm"
                  placeholder="Number of Tickets"
                  required
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  className="form-textarea w-full p-3 border rounded-md shadow-sm"
                  placeholder="Any special requests or questions?"
                ></textarea>
              </div>

              <div className="space-y-2">
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio1"
                      name="inlineRadioOptions1"
                      value="table"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio1"
                      className="ml-2 text-gray-700"
                    >
                      TABLE
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio2"
                      name="inlineRadioOptions1"
                      value="v-vip"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio2"
                      className="ml-2 text-gray-700"
                    >
                      V-VIP
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio3"
                      name="inlineRadioOptions1"
                      value="vip"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio3"
                      className="ml-2 text-gray-700"
                    >
                      VIP
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio4"
                      name="inlineRadioOptions1"
                      value="regular"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio4"
                      className="ml-2 text-gray-700"
                    >
                      Regular
                    </label>
                  </div>
                </div>

                <div className="flex justify-end space-x-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio5"
                      name="paymentOptions"
                      value="mastercard"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio5"
                      className="ml-2 text-gray-700"
                    >
                      MasterCard
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio6"
                      name="paymentOptions"
                      value="visa"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio6"
                      className="ml-2 text-gray-700"
                    >
                      VISA
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio7"
                      name="paymentOptions"
                      value="bank-transfer"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio7"
                      className="ml-2 text-gray-700"
                    >
                      Bank Transfer
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="inlineRadio8"
                      name="paymentOptions"
                      value="bitcoin"
                      className="form-radio text-primary"
                    />
                    <label
                      htmlFor="inlineRadio8"
                      className="ml-2 text-gray-700"
                    >
                      BITCOIN
                    </label>
                  </div>
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="bg-primary text-white px-6 py-2 rounded-md shadow hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  Submit Booking
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export default Booking;