import './MapLocation.scss'


function MapLocation() {
    return (
        <div className='location'>
            <div className="container">
                <h2 className="title">Места в Санкт- Петербурге, где можно поучиться:</h2>
                <div className='map'>
                    <img src="./images/map.png" alt="map" />
                    {/* Usı jerde súwrettiń ornına karta qoyılıwı kerek */}
                </div>
            </div>
        </div>
    )
}

export default MapLocation;