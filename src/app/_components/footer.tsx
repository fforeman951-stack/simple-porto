export default function Footer({name}: {name: String}){
    return (
        <div style={{
            minHeight: '80px',
            fontSize: 11,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <p>Ⓒ {(new Date).getFullYear()} {name}</p>
        </div>
    )
}