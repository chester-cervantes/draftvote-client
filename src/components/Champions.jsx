import React, {useState, useEffect} from 'react';

function Champions() {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>
                        <img src="https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png" className="img-responsive"/>
                        Test
                        <div className="image" style={{
                            backgroundImage: `url(https://ddragon.leagueoflegends.com/cdn/10.16.1/img/champion/Aatrox.png)`}} />
                        Test 2
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Champions;