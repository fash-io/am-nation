export const CountdownTimer = ({ timeRemaining }) => (
  <div className="row mt-4">
    {["days", "hours", "minutes", "seconds"].map((unit, idx) => (
      <div key={idx} className="col-3 text-center">
        <span className="d-block fs-3">{timeRemaining[unit]}</span>
        <span>
          <small>{unit.toUpperCase()}</small>
        </span>
      </div>
    ))}
  </div>
);

// TicketSelector Component
export const TicketSelector = ({ tickets, onTicketChange, ticketCounts }) => (
  <>
    {tickets.map((ticket, index) => (
      <div
        key={index}
        className="col-12 flex justify-content-between my-5 pe-5"
      >
        <div className="text-start">
          <h3>{ticket.name}</h3>
          <p>
            <span>{ticket.price_string}</span>
          </p>
        </div>
        <div className="text-end d-flex align-items-center">
          <button
            className="mx-2 rounded-circle px-2 py-1 border"
            onClick={() => onTicketChange(index, false, ticket.price)}
          >
            -
          </button>
          <span className="mx-2">{ticketCounts[index] || 0}</span>
          <button
            className="mx-2 rounded-circle px-2 py-1 border"
            onClick={() => onTicketChange(index, true, ticket.price)}
          >
            +
          </button>
        </div>
      </div>
    ))}
  </>
);
