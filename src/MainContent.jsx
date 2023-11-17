const MainContent = (props) => {
    const {toDo, setToDo} = props

    return (
        toDo.map(v => (toDo.length <= 15 ? <div className="content">{v.content}</div> : null))
        )
}

export default MainContent