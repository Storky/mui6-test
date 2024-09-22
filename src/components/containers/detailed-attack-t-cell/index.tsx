import Box from '@mui/material/Box';

const DetailedAttackTCell = ({wepData}) => {

    const {
        damage,
        windup,
        howLong,
        turnCap,
        parryDrainNex,
    } = wepData || {};

    const {head, torso, legs} = damage || {};

    const damageHead = <p>Head: {head[0]} / {head[1]} / {head[2]} / {head[3]}</p>;
    const damageTorso = <p>Torso: {torso[0]} / {torso[1]} / {torso[2]} / {torso[3]}</p>;
    const damageLegs = <p>Legs: {legs[0]} / {legs[1]} / {legs[2]} / {legs[3]}</p>;


    return (
       <div>
           <Box>
               {damageHead}
               {damageTorso}
               {damageLegs}
               <p>windup - {windup}</p>
               <p>howLong - {howLong}</p>
               <p>turnCap - {turnCap}</p>
               <p>parryDrainNex - {parryDrainNex}</p>
           </Box>

       </div>
    );
};

export default DetailedAttackTCell;