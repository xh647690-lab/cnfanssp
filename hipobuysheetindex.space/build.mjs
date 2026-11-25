import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';
import {pages,editorial} from './pages.mjs';
mkdirSync('dist',{recursive:true});
const constants={page:readFileSync('index.html','utf8'),pages,editorial};
const declarations=Object.entries(constants).map(([key,value])=>'const '+key+' = '+JSON.stringify(value)+';').join('\n');
writeFileSync('dist/_worker.js',declarations+'\n'+readFileSync('worker.mjs','utf8'));
