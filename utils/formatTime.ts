import moment from "moment";

export default function formatTime(time: number): string {
    // var formatted = moment(time, "seconds").format("mm:ss");
    console.log(time)
    let formatted = moment.utc(time*1000).format("mm:ss");
    return formatted
}