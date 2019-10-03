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
    var output = start_tag;
    for (let i = 0; i < depts.length; i++) {
        let x = depts[i];
        if (x.children !== []) {
            output += start_li+x.name+end_li+start_tag;
            for (let i2 = 0; i2 < x.children.length; i2++) {
                let y = x.children[i2];
                if (y.children !== []) {
                    output += start_li+y.name+end_li+start_tag;
                    for (let i3 = 0; i3 < y.children.length; i3++) {
                        let z = y.children[i3];
                        output += start_li+z.name+end_li;
                    }
                    output += end_tag
                } else {
                    output += start_li+y.name+end_li;
                }
            }
            output += end_tag
        } else {
        output += start_li+x.name+end_li;
        }

    }
    output += end_tag;
    return output;   
}

PrintDepts(org1_depts);
PrintDepts(org2_depts);