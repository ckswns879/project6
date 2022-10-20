import w from '../db/weather.json'

export default function WeatherDay(probs) {
    const d = probs.d;
    const witem = w.response.body.items.item[0]

    const items = [];
    const keys = [`rnSt${d}Am`, `rnSt${d}Pm`,`wf${d}Am`,`wf${d}Pm`]
    for (let k of keys){
        items.push(witem[k]);
    }
    console.log(items)
    return (
        <>
        
        <ul>
            <li>{d}일후 오전 강수량</li>
            <li>{d}일후 오후 강수량</li>
            <li>{d}일후 오전 날씨예보</li>
            <li>{d}일후 오후후 날씨예보</li>
        </ul>
        </>
    )
}