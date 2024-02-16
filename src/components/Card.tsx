export default function Card(){
  return (
    <>
    <div className="card">
      <img src="https://placehold.co/100x100"/>
      <div className="info">
        <h4 style={{
          color: "black",
          margin: 0
        }}>
          Name
        </h4>
        <p style={{
          color: "black",
          overflowWrap: "break-word"
        }}>
          Information regarding you and your github.
        </p>
      </div>
    </div>
    </>
  )
}
