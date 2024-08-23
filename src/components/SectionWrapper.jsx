export default function SectionWrapper(props) {
  const { id, title, children, more, type, lead } = props;
  return (
    <>
      {type == "1" ? (
        <div className="container-lg my-5 container-1 container-fluid" id={id}>
        <div className="my-5 d-flex justify-content-between align-items-center">
          <h3 className="fw-bold fs-2 text-lead">{title}</h3>
          {more && (<a className="nav-link" href={more.url}>{more.name} <i className="bi bi-arrow-right"></i></a>)}
        </div>
        {children}
      </div>
      ) : (
        <div className="container-lg p-5-lg container-1 container-fluid" id={id}>
          <div className="row">
            <div className="col-lg-12 text-center my-5">
              <h2 className="display-4">{title}</h2>
              {lead && <p className="lead">{lead}</p>}
            </div>
            {more && (<a className="nav-link" href={more.url}>{more.name} <i className="bi bi-arrow-right"></i></a>)}
          </div>
          {children}
        </div>
      )}
    </>
  );
}
