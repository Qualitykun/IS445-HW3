const org1_depts=[
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: []},
            {name: 'accounting receivable', children: []},
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]

const org2_depts=[
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: []},
            {
                name: 'accounting receivable',
                children: [{name: 'cash', children: []}, {name: 'check', children: []}],
            },
        ],
    },
    {
        name: 'finance',
        children: [{name: 'investment', children: []}],
    },
]

function PrintDepts(depts) {
    for (let i = 0; i < depts.length; i++) {
        let x = depts[i];
        let docul = document.createElement('ul');
        let newlistitem=document.createElement('li');
        let listvalue=document.createTextNode(x.name);
        newlistitem.appendChild(listvalue);
        docul.appendChild(newlistitem);
        if (x.children.length > 0) {
            for (let i2 = 0; i2 < x.children.length; i2++) {
                let y = x.children[i2]
                let docul2 = document.createElement('ul');
                docul.appendChild(docul2);
                let newlistitem2=document.createElement('li');
                let listvalue2=document.createTextNode(y.name);
                newlistitem2.appendChild(listvalue2);
                docul2.appendChild(newlistitem2);
                if (y.children.length > 0) {
                    for (let i3 = 0; i3 < y.children.length; i3++) {
                        let z = y.children[i3];
                        let docul3 = document.createElement('ul');
                        docul2.appendChild(docul3);
                        let newlistitem3=document.createElement('li');
                        let listvalue3=document.createTextNode(z.name);
                        newlistitem3.appendChild(listvalue3);
                        docul3.appendChild(newlistitem3);
                    }
                }
            }
            
        }
        
    }

}

PrintDepts(org1_depts);
PrintDepts(org2_depts);