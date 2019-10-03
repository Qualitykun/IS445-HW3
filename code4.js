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

const start_tag = '<ul>'
const end_tag = '</ul>'
const start_li = '<li>'
const end_li = '</li>'

function PrintDepts(depts) {
    output = start_tag;
    for (let i = 0; i < depts.length; i++) {
        let x = depts[i];
        output += start_li+x.name+end_li
        if (x.children !== []) {
            PrintDepts(x.children);
        }
        output += end_tag;
    }
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = output;
}

PrintDepts(org1_depts);
PrintDepts(org2_depts);