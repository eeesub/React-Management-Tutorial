
export default function Customer(p) {
    return (
        <div>
            <CustomerProfile id={p.id} name={p.name} image= {p.image} />
            <CustomerInfo birthday={p.birthday} gender={p.gender} job={p.job}/>
        </div>
    )
} 

export function CustomerProfile(p) {
    return (
        <div>
            <img src={p.image} alt='profile' />
            <h2>{p.name}({p.id})</h2>
        </div>
    )
}

function CustomerInfo(p) {
    return(
        <div>
            <p>{p.birthday}</p>
            <p>{p.gender}</p>
            <p>{p.job}</p>
        </div>
    )
}