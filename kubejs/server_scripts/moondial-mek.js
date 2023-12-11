// priority: 0

settings.logAddedRecipes = false
settings.logRemovedRecipes = false
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Loading Moondial Mekanism fix')

onEvent('recipes', event => {
    event.remove({output: 'mekanism:meka_tool'})
    event.remove({output: 'mekanism:mekasuit_helmet'})
    event.remove({output: 'mekanism:mekasuit_bodyarmor'})
    event.remove({output: 'mekanism:mekasuit_pants'})
    event.remove({output: 'mekanism:mekasuit_boots'})
    event.remove({output: 'mekanism:atomic_disassembler'})
})
