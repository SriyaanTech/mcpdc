import { Link } from "react-router-dom";
export default function NotFound(){ return <main className="section section--white"><div className="shell empty-page"><p className="eyebrow">404</p><h1>Page not found</h1><p>The page you requested is not available.</p><Link className="btn btn--red" to="/">Return Home</Link></div></main>; }
