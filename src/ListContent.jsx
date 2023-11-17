function ListContent(props) {
    const {toDo, setToDo} = props

    return (
        <section className="list">
           { toDo.map(v => ( toDo.length <= 15 ? <div className="list_elem">{v.title}</div> : null )) }
        </section>
    )
}

export default ListContent