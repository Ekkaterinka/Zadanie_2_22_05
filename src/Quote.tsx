
export default function Quote({ ListQuote }: any) {
  const Item = ListQuote.map((e: any) => {
    return (
          <div key={e.id} className="Valuta">
            <h5>{e.title}</h5>
            <h6>{e.course}</h6>
            <p>{e.chage}</p>
          </div>
    )
})
return (
    <div className="ListQuote">{Item}</div>
)
}
