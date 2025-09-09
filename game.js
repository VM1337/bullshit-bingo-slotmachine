const words1 = ['The Big', 'The Great', 'The Awesome', 'The Legendary', 'The Tremendous', 'The Fantastic', 'The Incredible', 'The Amazing', 'The Terrific', 'The Phenomenal', 'The Wonderful', 'The Outstanding', 'The Huge'];
const words2 = ['Squad', 'Agile', 'Mission', 'Scrum', 'Tribe', 'Guild', 'Team'];
const words3 = ['Leader', 'Agent', 'Cheese', 'Architect', 'Engineer', 'Coordinator', 'Visionary', 'Champion', 'Manager'];
let spinning = false;

function getRandom(coll) {
    return coll[Math.floor(Math.random() * coll.length)];
}

function spin() {
    
    spinning = true;
    document.getElementById('spin').disabled = true;
    document.getElementById('result').textContent = 'Determinig your Role...';
    
    const slots = ['slot1', 'slot2', 'slot3'];
    slots.forEach(id => document.getElementById(id).classList.add('spinning'));
    
    setTimeout(() => {
        const results = [getRandom(words1), getRandom(words2), getRandom(words3)];
        
        slots.forEach((id, i) => {
            const slot = document.getElementById(id);
            slot.classList.remove('spinning');
            slot.textContent = results[i];
        });
        
        document.getElementById('result').textContent = results.join(' ');
        document.getElementById('spin').disabled = false;
        spinning = false;
    }, 1500);
}