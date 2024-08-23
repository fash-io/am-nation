import { jumbo } from "../constants"
export default function Jumbotron() {
  return (
    <div className="container-fluid my-5 jumbo d-flex flex-column align-items-center justify-content-center w-100" >
      <div className="w-50 text-center jumbo-txt">
        <h1 className="text-center text-black">{jumbo.jumboTitle}<span> !</span> </h1>
        <p className="lead fs-4 text-black">{jumbo.jumboTxt}</p>
          <a href="/booking" className="btn btn-dark px-4">{jumbo.jumboBtn}</a>
      </div>
    </div>
  )
}
