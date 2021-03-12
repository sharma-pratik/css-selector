elementNames = []

divNode1 = document.querySelectorAll(
    "#block-views-block-view-noticia-pbh-block-5 .content.block-content .js-view-dom-id-1c7b35bd766d2212e850c61700c76dc02de8f9425db30a7d3356f14922936cec .views-field.views-field-nothing .field-content"
)

divNode2 = document.querySelectorAll(
    "a[href]"
)

for( i=0;i<divNode2.length; i++){
    
    if(!elementNames.includes(divNode2[i].tagName)){
        elementNames.push(divNode2[i].tagName)
    }
}


if(divNode1){
    printElements(divNode1)
}

console.log("############# ELEMENTS NAMES")
console.log(elementNames)

function printElements(n){
    childNodes = n[0].children
    for(i=0; i<childNodes.length; i++){
        elements = childNodes[i].children
        console.log('child child elemnt', i, elements)
        if(elements && elements.length > 1){
            printElements(elements)
            elementNames.push( elements[0].tagName)
        }
        else if (elements && elements.length==1){
            elementNames.push( elements[0].tagName)
        }
    }
}


