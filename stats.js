const os = require('os');
const log = require('./logger');

const { freemem, totalmem } = os

const percent = {
    free: parseInt(freemem / totalmem * 100)
}

setInterval(() => {
    const status = {
        free: parseInt(freemem / 1024 / 1024),
        total: parseInt(totalmem / 1024 / 1024),
        percent: percent,
        format: function () {
            return {
                free: this.free + " MB",
                total: this.total + " MB",
                usage: this.percent.free + "%"
            }
        }
    }
    const packed = status.format()

    console.clear();
    console.log("= STATUS DO COMPUTADOR =")
    console.log(packed)
    console.table(packed)

    log(`${JSON.stringify(packed)}\n`);

    //De quanto em quanto tempo rodará
}, 800);