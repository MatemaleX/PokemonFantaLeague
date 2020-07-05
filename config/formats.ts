// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js
import {Utils} from './../lib/utils';

export const Formats: (FormatsData | {section: string, column?: number})[] = [


	// Fantaleague
	///////////////////////////////////////////////////////////////////
	{
		section: "Fataleague",
	},
	{
		name: "MegaSeries",
		
		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'dynamaxclause'],
		minSourceGen: 8,
	},
	{
		name: "DynaSeries",
		
		mod: 'gen8',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Standard GBU', 'VGC Timer', 'megaclause', 'zmoveclause'],
		minSourceGen: 8,
	}
	]