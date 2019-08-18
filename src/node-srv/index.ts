#!/usr/bin/env node
// All rights reserved by INTUITION.DEV | Cekvenich, licensed under LGPL 3.0

import commandLineArgs = require('command-line-args')
import { IDB } from './lib/IDB'
import { Download } from 'mbake/lib/FileOpsExtra';
import { IntuApp } from './IntuApp'
import { AppLogic } from './lib/AppLogic';
import { Util } from './lib/AppLogic';
const logger = require('tracer').console()

const optionDefinitions = [
    { name: 'intu', defaultOption: true },
    { name: 'help', alias: 'h', type: Boolean },
    { name: 'CRUD', alias: 'c', type: Boolean },
    { name: 'ShopShip', alias: 's', type: Boolean },
]

const argsParsed = commandLineArgs(optionDefinitions)
console.log(argsParsed)

const cwd: string = process.cwd()

function unzipSS() {
    new Download('intu4SS', cwd).autoUZ()
    console.info('Extracted a starter Ship and Shop app')
}
function unzipC() {
    new Download('CRUD', cwd).autoUZ()
    console.info('Extracted a starter CRUD app')
}
function runISrv() {
    const ip = require('ip')
    const ipAddres = ip.address()

    const hostIP = 'http://' + ipAddres + ':'

    console.log("TCL: hostIP", hostIP)

    // the only place there is DB new is here.
    const idb = new IDB(Util.intuPath, '/IDB.sqlite')

    const mainEApp = new IntuApp(idb, ['*'])

    mainEApp.start()
    
}//()

function help() {
    console.info()
    console.info('intu version: ' + AppLogic.veri())
    console.info()
    console.info('Usage:')
    console.info(' To run:                                                intu')
    console.info(' and then open a browser on the specified port. There is small app inROOT')
    console.info()

    console.info('  For starter CRUD app:                                  intu -c')
    console.info('  For an example of an e-commerce (shop and ship) app:   intu -s')

}//()

// start: /////////////////////////////////////////////////////////////////////////////////////
if (argsParsed.CRUD)
    unzipC()
else if (argsParsed.help)
    help()
else if (argsParsed.ShopShip)
    unzipSS()
else
    runISrv()

