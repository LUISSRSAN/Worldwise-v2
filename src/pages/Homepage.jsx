import PageNav from "../components/PageNav"
import {Link} from "react-router-dom"
import AppNav from "../components/AppNav"

export default function Homepage() {
  return (
    <div>
      <PageNav/>
      <AppNav/>
     <h1 className="test">WorldWise</h1>
     <Link to="/app"> Go to the App
     </Link>
    </div>
  );
}
