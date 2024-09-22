import data from './mordstats.json';

const convertMordstatsDataToMap = (data: { [s: string]: unknown; } | ArrayLike<unknown>) => {
    const map = new Map<string, object>();

    if (!data) return;

    Object.entries(data).forEach(([key, val]) => {
        map.set(key, val as object);
    })

    return map;
};

export const allWeaponsMap = convertMordstatsDataToMap(data);

export const filterForWepTable = (dataAsMap) => {
    const map = new Map<string, object>();

    const attackMapper = (attack): object | null => {
        if (!attack && !attack?.damage) return null;

        return {
            damage: attack?.damage,
            windup: attack?.speed?.windup,
            howLong: attack?.general?.length,
            turnCap: `${attack?.general?.turnCapY}/${attack?.general?.turnCapX}`,
            parryDrainNex: `${attack?.general?.parryDrainNeg}/${attack?.general?.staminaDrain}`,
        }
    };

    const weaponMapper = (initObject): object => {
        return {
            a1: attackMapper(initObject?.attacks[0]),
            a2: attackMapper(initObject?.attacks[1]),
            a3: attackMapper(initObject?.attacks[2]),
            a4: attackMapper(initObject?.attacks[3]),
        }
    };

    for (const [key, value] of dataAsMap) {

        if (value.type !== 'melee') {
            map.delete(key);
        } else {
            const wep = weaponMapper(value)
            map.set(key, wep);
        }
    }

    return Array.from(map, ([name, value]) => ({name, ...value}));
}


export const wepTableData = filterForWepTable(allWeaponsMap);
