function footToMeter(foot_number) {
    let meter = 0.305 * parseInt(foot_number);
    document.getElementById('input_meter').value = meter;
}

function meterToFoot(meter_number) {
    let foot = 3.279 * parseInt(meter_number);
    document.getElementById('input_foot').value = foot;
}
