import React from 'react';

const Stats = ({ players }) => {
    /* 
        - Desstructuring allows us to pull out properties from an object
        - In this case we're destructuing the props objects
            - Destructure props by setting as funciton parameters
            - Can also destrucutre props with a variable assignment

    */ 

    const totalPlayers = players.length;
    const totalPoints = players.reduce( (total, player) => {
        return total + player.score;
    }, 0)

    return (
        <table className='stats'>
            <tbody>
                <tr>
                    <td>Players: </td>
                    <td>{totalPlayers}</td>
                </tr>
                <tr>
                    <td>Total Points</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    )

}


export default Stats;