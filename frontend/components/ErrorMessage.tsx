export default ({ error }) => (
  <aside>
    <p>{error.map(err => (
      <div>{err.category} - {err.message}</div>
    ))}</p>
  </aside>
)
