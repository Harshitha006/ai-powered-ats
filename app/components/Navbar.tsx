import {Link} from "react-router";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <p className="text-2xl font-bold text-gradient">RESUMIND</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        Upload Resume
      </Link>
    </nav>
  )
}
// Here comes the array of map of reviews or reviews that the user has uploaded
// and the user can click on the review to see the details of the review
// t consists of several objects and each object has a title, description, and a link to the review
// this data leter on is going to be fetched from the data base, as of now for the UI, let's just hardcode it and create some mock data that help us to think about the database architecture.
export default Navbar;