import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section page-top">
      <div className="wrap stack notfound">
        <p className="eyebrow">404</p>
        <h1 className="display page-title">This page wandered off.</h1>
        <p className="lead">The link may be broken, or the page may have moved.</p>
        <Link to="/" className="btn btn--primary">
          Back home <span className="arrow" aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  )
}
