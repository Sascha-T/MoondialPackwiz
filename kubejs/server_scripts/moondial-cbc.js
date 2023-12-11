// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Moondial CBC fix')

onEvent('recipes', event => {
	event.remove({mod: 'createbigcannons'})

    event.shaped('createbigcannons:cannon_loader', [
    ' G ',
    ' C ',
    ' P '
    ], {
    G: '#forge:gunpowder',
    C: 'create:andesite_casing',
    P: 'create:piston_extension_pole'
    })

    event.shaped('createbigcannons:cannon_mount', [
    ' I ',
    'CAC',
    ' S '
    ], {
    A: 'create:andesite_casing',
    C: 'create:cogwheel',
    S: 'create:shaft',
    I: '#forge:ingots/iron'
    })

    event.shaped('createbigcannons:ram_head', [
    ' G ',
    ' P ',
    '   '
    ], {
    G: '#minecraft:planks',
    P: 'create:piston_extension_pole'
    })

    event.shaped('createbigcannons:worm_head', [
    ' G ',
    ' P ',
    '   '
    ], {
    G: 'minecraft:iron_bars',
    P: 'create:piston_extension_pole'
    })
    
    
    event.shaped('2x createbigcannons:quickfiring_mechanism', [
    '  B',
    ' S ',
    'S  '
    ], {
    S: '#forge:ingots/iron',
    B: '#minecraft:planks'
    })

    
    //autocannon
    //rounds    
    event.shaped('6x createbigcannons:empty_autocannon_cartridge', [
    'SSS'
    ], {
    S: '#forge:ingots/bronze'
    })

    //steel
    event.shaped('4x createbigcannons:steel_autocannon_barrel', [
    ' S ',
    'S S',
    ' S '
    ], {
    S: '#forge:ingots/steel'
    })

    event.shaped('1x createbigcannons:steel_autocannon_recoil_spring', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:steel_autocannon_barrel'
    })

    event.shaped('1x createbigcannons:steel_autocannon_breech', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:steel_autocannon_recoil_spring'
    })

    //bronze
    event.shaped('4x createbigcannons:bronze_autocannon_barrel', [
    ' S ',
    'S S',
    ' S '
    ], {
    S: '#forge:ingots/bronze'
    })

    event.shaped('1x createbigcannons:bronze_autocannon_recoil_spring', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/bronze',
    C: 'createbigcannons:bronze_autocannon_barrel'
    })

    event.shaped('1x createbigcannons:bronze_autocannon_breech', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/bronze',
    C: 'createbigcannons:bronze_autocannon_recoil_spring'
    })


    //CANNON ------------------------------
    //shots
    event.shaped('1x createbigcannons:he_shell', [
    'ITI',
    'ITI',
    ' S '
    ], {
    S: '#minecraft:wooden_slabs',
    I: '#forge:ingots/steel',
    T: 'minecraft:tnt'
    })    

    event.shaped('1x createbigcannons:ap_shell', [
    'III',
    'TIT',
    ' S '
    ], {
    S: '#minecraft:wooden_slabs',
    I: '#forge:ingots/steel',
    T: 'minecraft:tnt'
    })    

    event.shaped('3x createbigcannons:big_cartridge', [
    ' S ',
    ' S ',
    ' S '
    ], {
    S: '#forge:ingots/bronze'
    })

    event.shaped('2x createbigcannons:empty_powder_charge', [
    ' S ',
    ' W ',
    ' S '
    ], {
    S: '#forge:string',
    W: '#minecraft:wool'
    })
    
    event.shapeless('1x createbigcannons:powder_charge', ['createbigcannons:empty_powder_charge', 'createbigcannons:packed_gunpowder'])
    event.shapeless('1x createbigcannons:packed_gunpowder', ['3x #forge:gunpowder'])
    event.shapeless('1x createbigcannons:nitropowder', ['1x #forge:gunpowder', '#forge:dusts/sulfur'])

    event.shaped('4x createbigcannons:impact_fuze', [
    ' W ',
    ' S ',
    '   '
    ], {
    S: '#forge:dusts/redstone',
    W: '#minecraft:buttons'
    })

    event.shaped('4x createbigcannons:timed_fuze', [
    ' W ',
    ' G ',
    ' S '
    ], {
    S: '#forge:dusts/redstone',
    W: '#minecraft:buttons',
    G: '#forge:ingots/gold'
    })

    event.shapeless('1x createbigcannons:delayed_impact_fuze', ['createbigcannons:timed_fuze', 'createbigcannons:impact_fuze'])
    
    event.shaped('1x createbigcannons:solid_shot', [
    ' I ',
    ' I ',
    ' S '
    ], {
    S: '#minecraft:wooden_slabs',
    I: '#forge:ingots/iron'
    })    

    event.shaped('1x createbigcannons:ap_shot', [
    ' T ',
    ' I ',
    ' S '
    ], {
    S: '#minecraft:wooden_slabs',
    I: '#forge:ingots/iron',
    T: '#forge:ingots/steel'
    })    

    //steel
    event.shaped('4x createbigcannons:steel_cannon_barrel', [
    'SSS',
    'S S',
    'SSS'
    ], {
    S: '#forge:ingots/steel'
    })

    event.shaped('1x createbigcannons:built_up_steel_cannon_barrel', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:steel_cannon_barrel'
    })

    event.shaped('1x createbigcannons:steel_cannon_chamber', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:built_up_steel_cannon_barrel'
    })

    event.shaped('1x createbigcannons:built_up_steel_cannon_chamber', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:steel_cannon_chamber'
    })

    event.shaped('1x createbigcannons:thick_steel_cannon_chamber', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    C: 'createbigcannons:built_up_steel_cannon_chamber'
    })

    event.shaped('1x createbigcannons:steel_sliding_breech', [
    ' S ',
    ' C ',
    ' B '
    ], {
    S: 'create:shaft',
    B: 'createbigcannons:steel_sliding_breechblock',
    C: 'createbigcannons:steel_cannon_chamber'
    })

    event.shaped('1x createbigcannons:steel_screw_breech', [
    ' S ',
    ' C ',
    ' B '
    ], {
    S: 'create:shaft',
    B: 'createbigcannons:steel_screw_lock',
    C: 'createbigcannons:steel_cannon_chamber'
    })

    event.shaped('2x createbigcannons:steel_sliding_breechblock', [
    ' B ',
    'SSS',
    ' B '
    ], {
    S: '#forge:ingots/steel',
    B: 'create:cogwheel'
    })

    event.shaped('2x createbigcannons:steel_screw_lock', [
    ' S ',
    'SBS',
    ' S '
    ], {
    S: '#forge:ingots/steel',
    B: 'create:cogwheel'
    })




    //bronze
    event.shaped('4x createbigcannons:bronze_cannon_barrel', [
    'SSS',
    'S S',
    'SSS'
    ], {
    S: '#forge:ingots/bronze'
    })

    event.shaped('1x createbigcannons:bronze_cannon_chamber', [
    ' S ',
    ' C ',
    ' S '
    ], {
    S: '#forge:ingots/bronze',
    C: 'createbigcannons:bronze_cannon_barrel'
    })
})
