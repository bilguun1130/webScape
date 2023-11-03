

function returnValue () {
    const name = document.getElementById("exampleFormControlInput1").value;
    const howMany = document.getElementById("exampleFormControlInput2").value;
    const numberChange = Number(howMany);
    var pageMaker = "";  
    for (var i = 0; i < numberChange; i++) {
        pageMaker +=`div.t-row:nth-of-type(${i+1}) a.clickable`;
        pageMaker += ", "
    }
    pageMaker = pageMaker.slice(0, -2); 
    document.getElementById("exampleFormControlTextarea1").value ='{"_id":"'+name+'","startUrl":["https://petition.parliament.mn/petition"],"selectors":[{"id":"wrapper","parentSelectors":["_root"],"type":"SelectorLink","selector":"'+ pageMaker +
    '","multiple":true,"linkType":"linkFromHref"},{"id":"dugaar","parentSelectors":["wrapper"],"type":"SelectorText","selector":"span.pet-no","multiple":false,"regex":""},{"id":"ovog","parentSelectors":["wrapper"],"type":"SelectorText","selector":".text-dark > :not(strong)","multiple":false,"regex":""},{"id":"tovch Tailbar","parentSelectors":["wrapper"],"type":"SelectorText","selector":"p.fw-normal","multiple":false,"regex":""},{"id":"urgudul","parentSelectors":["wrapper"],"type":"SelectorText","selector":".bg-grad-primary p","multiple":false,"regex":""}]}';
}