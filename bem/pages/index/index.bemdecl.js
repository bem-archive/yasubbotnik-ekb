exports.blocks = [
    { name: 'b-page' },
    { name: 'b-head',
        elems: [{ name: 'logo' }] },
    { name: 'b-menu',
        mods: [{ name: 'size',
            vals: ['small'] }],
        elems: [{ name: 'item',
            mods: [{ name: 'state',
                vals: ['current'] }] }] },
    { name: 'b-main' },
    { name: 'b-foot' },
]
