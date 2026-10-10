(() => {
 'use strict';
 const UI=window.ToolUI,core=window.PortfolioTools,input=document.getElementById('text'),status=document.getElementById('status');
 const statKeys=['words','characters','noSpaces','sentences','paragraphs','reading','unique'];
 let timer,stats=core.analyze('',UI.lang);
 function render(){stats=core.analyze(input.value,UI.lang);const number=new Intl.NumberFormat(UI.locale);for(const key of statKeys)document.getElementById('stat-'+key).textContent=number.format(stats[key])+(key==='reading'?' '+UI.t('minutes'):'');document.getElementById('summary').textContent=`${number.format(stats.words)} ${UI.t('words').toLocaleLowerCase(UI.locale)} · ${number.format(stats.characters)} ${UI.t('characters').toLocaleLowerCase(UI.locale)} · ${stats.reading} ${UI.t('minutes')}`;document.getElementById('words-empty').hidden=stats.words>0;const list=document.getElementById('word-list');list.replaceChildren();for(const [word,count]of stats.top){const li=document.createElement('li'),label=document.createElement('span'),bar=document.createElement('i'),fill=document.createElement('b'),value=document.createElement('em');label.className='word';label.textContent=word;fill.style.width=(count/stats.top[0][1]*100)+'%';bar.append(fill);bar.setAttribute('aria-hidden','true');value.textContent=number.format(count);li.append(label,bar,value);list.append(li)}status.textContent=''}
 function report(){render();return UI.t('report')+'\n'+'='.repeat(30)+'\n'+statKeys.map(key=>`${UI.t(key)}: ${stats[key]}${key==='reading'?' '+UI.t('minutes'):''}`).join('\n')+'\n\n'+UI.t('frequency')+'\n'+stats.top.map(([word,count])=>`${word}: ${count}`).join('\n')+'\n\n'+UI.t('localOnly')+'\n'}
 input.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(render,120)});
 document.getElementById('sample').addEventListener('click',()=>{input.value=UI.t('sampleText');render();input.focus()});
 document.getElementById('clear').addEventListener('click',()=>{clearTimeout(timer);input.value='';render();input.focus()});
 document.getElementById('export').addEventListener('click',()=>UI.download(`text-report-${UI.lang}.txt`,report()));
 document.getElementById('copy').addEventListener('click',async()=>{const text=report();try{await navigator.clipboard.writeText(text);status.textContent=UI.t('copied')}catch{UI.download(`text-report-${UI.lang}.txt`,text)}});
 window.addEventListener('tool-languagechange',render);
 render();
})();
