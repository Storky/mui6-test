import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import * as React from "react";
import { useEffect } from "react";
import { wepTableData } from "src/assets/data/mordstats-data.helpers.ts";
import DetailedAttackTCell from "src/components/containers/detailed-attack-t-cell";

export default React.memo(function WeaponTable() {
    const [data, setData] = React.useState<Array<any>>([]);

    useEffect(() => {
        console.log('wepTableData', wepTableData);

        setData(wepTableData);
    }, [wepTableData]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">a1</TableCell>
                        <TableCell align="right">a2</TableCell>
                        <TableCell align="right">a3</TableCell>
                        <TableCell align="right">a4</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((wep) => (
                        <TableRow
                            key={wep.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {wep.name}
                            </TableCell>

                            <TableCell align="right">
                                <DetailedAttackTCell wepData={wep?.a1} />
                            </TableCell>
                            <TableCell align="right">{wep?.a2?.damage?.torso[3]}</TableCell>
                            <TableCell align="right">{wep?.a3?.damage?.torso[3]}</TableCell>
                            <TableCell align="right">{wep?.a4?.damage?.torso[3]}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
});