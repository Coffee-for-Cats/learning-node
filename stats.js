const os = require('os');

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
                total: this.total + " MB; ",
                usage: this.percent.free + "%"
            }
        }
    }

    console.clear();
    console.log("= STATUS DO COMPUTADOR =")
    console.table(status.format())

    //De quanto em quanto tempo rodará
}, 800);