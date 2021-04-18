

const DisplayMovie = (props) => {
    return (
        <div>
            {
            props.movie.map((title) => {
                return (
                    <p>{title.title}</p> 
                )
            })

            }
        </div>
    )
}

export default DisplayMovie;