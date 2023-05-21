const Input = ({ children, type }) => {
    return (
        <div className="border-orange-500">
            <input className="border-orange-500" type={type} placeholder={children} />
        </div>
    )
}

export default Input