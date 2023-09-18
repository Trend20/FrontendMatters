import emptyIcon from '../assets/img/empty.png'
const Empty = () =>{
    return(
        <div className='empty-page'>
            <img src={emptyIcon} alt="empty-icon" />
            <h1>No Article Available</h1>
        </div>
    )
}

export default Empty;