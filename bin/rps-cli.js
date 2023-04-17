#!/usr/bin/env node
import { rps } from "../lib/rpsls.js"
import minimist from "minimist";

let args = minimist(process.argv.slice(2));

if (args.h || args.help){
	console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\t-h, --help     display this help message and exit\n\t-r, --rules     display the rules and exit\n\nExaamples:\n\tnode-rps     Return JSON with single player RPS result.\n\t\t\t\te.g. {"player":"rock"}\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.\n\t\t\t\te.g {"player":"rock","opponent":"scissors","result","result","win"}');
	process.exit(0);
}

if(args.r || args.rules){
	console.log('Rules for Rock Paper Scissors:\n\n\t- Scissors CUTS Paper\n\t- Paper COVERS Rock\n\t- Rock CRUSHES Scissors');
	process.exit(0);
}
let shot = args._[0];

try{
	console.log(JSON.stringify(rps(shot)));
} catch (e){
	console.log('Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\N\T-h, --help     display this help message and exit\n\t\-r, --rules     display the rules and exit\n\nExamples:\n\tnode-rps     Return JSON with single player RPS result.\n\t\t\t\te.g. {"player":"rock"}\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.\n\t\t\t\te.g {"player":"rock","opponent":"scissors","result","result":"win"}');
	console.log('Rules for Rock Paper Scissors:\n\n\t- Scissors CUTS Paper\n\t- Paper COVERS Rock\n\t- Rock CRUSHES Scissors');
	process.exit(0);
}
