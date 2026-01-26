const AccordianItem = ({item, setExpanded, expanded}) => {
  return (
    <div className="border border-black rounded-md m-10">
        <div
            className="p-3 bg-slate-400 flex justify-between cursor-pointer"
            onClick={() => setExpanded((expanded) => !expanded)}
        >
            <span>{item.title}</span>
            <span>⌄</span>
        </div>
        {!!expanded && (
            <div className="p-3">{item.description}</div>
        )}
    </div>
  )
}

export default AccordianItem