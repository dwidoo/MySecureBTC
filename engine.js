/**
 * MyBTCSecured ENGINE V2.8
 * Fixes: Variable 'T' definition, Start logic conflict
 */

// ============================================================
// 1. INITIALISATION & DATA
// ============================================================

// Vérification de sécurité
if (typeof KB === 'undefined') {
    console.error("ERREUR CRITIQUE : knowledge_base.js n'est pas chargé. Vérifiez l'ordre des scripts dans index.html");
    alert("Erreur de chargement des données. Vérifiez la console.");
}

const DB_WALLETS = KB.WALLETS;
const DB_METAL = KB.METALS;
// CORRECTION ICI : On définit T pour que le reste du code fonctionne
const T = KB.LANG.fr; 

// Variables d'état
let answers = { q5: [] };
let currentStep = 0;
const QUESTION_FLOW = ['q1', 'q1_bis', 'q2', 'q2_bis', 'q3', 'q3_bis', 'q4', 'q5', 'q6', 'q7', 'q8'];

// ============================================================
// 2. GESTION DU DISCLAIMER & DEMARRAGE
// ============================================================

// Appelé par le bouton HTML "Démarrer"
function openLegalModal() {
    const modal = document.getElementById('legal-modal');
    if(modal) {
        modal.classList.remove('hidden');
    } else {
        console.error("Erreur : Modal #legal-modal introuvable dans le HTML");
        // Fallback si la modale est cassée : on lance le quiz direct
        startQuiz(); 
    }
}

// Appelé par le bouton "Accéder à l'outil" dans la modale
function acceptLegalAndStart() {
    document.getElementById('legal-modal').classList.add('hidden');
    startQuiz();
}

// Logique de la case à cocher (activée au chargement de la page)
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. INJECTION DU TITRE ET DU LOGO (NOUVEAU)
    document.title = T.app_title_text; // Met à jour l'onglet
    const navBrand = document.getElementById('nav-brand');
    if(navBrand) navBrand.innerHTML = T.app_brand_html; // Met à jour le logo avec les couleurs

    // 1. INJECTION DES TRADUCTIONS (I18N)
    // Home
    setText('txt-hero-1', T.hero_title_1);
    setText('txt-hero-2', T.hero_title_2);
    setHTML('txt-hero-desc', T.hero_desc); // HTML pour le gras <strong>
    setText('txt-btn-start', T.hero_btn);
    
    // Blocs Rassurance
    setText('txt-block-1-title', T.block_anon_title);
    setText('txt-block-1-desc', T.block_anon_desc);
    setText('txt-block-2-title', T.block_agnostic_title);
    setText('txt-block-2-desc', T.block_agnostic_desc);
    setText('txt-block-3-title', T.block_full_title);
    setText('txt-block-3-desc', T.block_full_desc);

    // Modale Juridique
    setText('legal-title', T.legal_title);
    setHTML('legal-p1', T.legal_p1);
    setHTML('legal-p2', T.legal_p2);
    setHTML('legal-p3', T.legal_p3);
    setHTML('legal-p4', T.legal_p4);
    
    // Injection des textes des deux checkboxes
    setText('lbl-check-offline', T.legal_checkbox_offline);
    setText('lbl-check-terms', T.legal_checkbox_terms);
    
    setText('legal-btn-txt', T.legal_btn_start);

// LOGIQUE DE VALIDATION (2 Checkboxes obligatoires)
    const checkOffline = document.getElementById('check-offline');
    const checkTerms = document.getElementById('check-terms');
    const btnLegal = document.getElementById('legal-btn');

    function updateStartButton() {
        if(checkOffline && checkTerms && btnLegal) {
            // Les deux doivent être cochées
            if(checkOffline.checked && checkTerms.checked) {
                btnLegal.disabled = false;
                btnLegal.classList.remove('bg-slate-700', 'text-slate-500', 'cursor-not-allowed');
                btnLegal.classList.add('bg-[#f7931a]', 'text-white', 'cursor-pointer', 'shadow-lg', 'hover:bg-[#d67b0f]');
            } else {
                btnLegal.disabled = true;
                btnLegal.classList.add('bg-slate-700', 'text-slate-500', 'cursor-not-allowed');
                btnLegal.classList.remove('bg-[#f7931a]', 'text-white', 'cursor-pointer', 'shadow-lg', 'hover:bg-[#d67b0f]');
            }
        }
    }

    if(checkOffline) checkOffline.addEventListener('change', updateStartButton);
    if(checkTerms) checkTerms.addEventListener('change', updateStartButton);
});

// Helper pour injecter du texte simple
function setText(id, text) {
    const el = document.getElementById(id);
    if(el) el.innerText = text;
}

// Helper pour injecter du HTML (ex: <strong>)
function setHTML(id, html) {
    const el = document.getElementById(id);
    if(el) el.innerHTML = html;
}

// ============================================================
// 3. MOTEUR DU QUIZ
// ============================================================

function startQuiz() {
    document.getElementById('intro-panel').classList.add('hidden');
    document.getElementById('quiz-panel').classList.remove('hidden');
    renderQuestion();
}

function prevQuestion() {
    if (currentStep > 0) {
        currentStep--;
        if (shouldSkip(QUESTION_FLOW[currentStep])) prevQuestion();
        else renderQuestion();
    }
}

function shouldSkip(qId) {
    if (qId === 'q1_bis' && answers.q1 !== '3') return true;
    if (qId === 'q8' && (answers.q1 !== '3' && answers.q2 !== 'expert')) return true;
    return false;
}

function renderQuestion() {
    const qId = QUESTION_FLOW[currentStep];
    if (!qId) { finishQuiz(); return; }

    const qData = T[qId]; // T est maintenant bien défini !
    const container = document.getElementById('question-container');
    const progress = ((currentStep) / QUESTION_FLOW.length) * 100;
    document.getElementById('progress-bar').style.width = `${progress}%`;

    let html = `
        <div class="fade-in">
            <h2 class="text-xl md:text-2xl font-bold text-white mb-3">${qData.text}</h2>
            ${qData.info ? `<div class="bg-blue-900/20 border-l-2 border-blue-500 p-3 mb-6 rounded-r text-sm text-blue-200 flex items-start"><i class="fa-solid fa-circle-info mt-1 mr-3 flex-shrink-0"></i><span>${qData.info}</span></div>` : ''}
            <div class="space-y-3">
    `;

    if (qId === 'q5') {
        const options = ['opt_fire_std', 'opt_fire_ext', 'opt_water', 'opt_social', 'opt_none'];
        options.forEach(opt => {
            const isChecked = answers.q5 && answers.q5.includes(opt) ? 'checked' : '';
            html += `
                <label class="checkbox-wrapper cursor-pointer block relative">
                    <input type="checkbox" value="${opt}" ${isChecked} onchange="handleMultiAnswer(this)" class="sr-only">
                    <div class="p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-orange-500 transition-all text-slate-200 flex items-center justify-between">
                        <span class="font-medium">${qData[opt]}</span>
                        <div class="check-icon w-6 h-6 rounded-full border border-slate-500 flex items-center justify-center text-orange-500 opacity-20 transform scale-75 transition-all">
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </label>
            `;
        });
        html += `<button onclick="nextStep()" class="mt-6 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-6 rounded-xl transition-all">Valider les risques</button>`;
    } else {
        Object.keys(qData).forEach(key => {
            if (key.startsWith('opt_')) {
                const val = key.replace('opt_', '');
                html += `
                    <button onclick="handleAnswer('${qId}', '${val}')" class="w-full text-left p-4 rounded-xl border border-slate-700 bg-slate-800/50 hover:bg-slate-700 hover:border-orange-500 transition-all text-slate-200 group">
                        <div class="flex items-center">
                            <div class="w-4 h-4 rounded-full border border-slate-500 mr-3 group-hover:border-orange-500 group-hover:bg-orange-500 transition-colors"></div>
                            <span class="font-medium group-hover:text-white">${qData[key]}</span>
                        </div>
                    </button>
                `;
            }
        });
    }
    html += `</div></div>`;
    container.innerHTML = html;
    
    const btnPrev = document.getElementById('btn-prev');
    if (currentStep > 0) btnPrev.classList.remove('hidden');
    else btnPrev.classList.add('hidden');
}

function handleMultiAnswer(checkbox) {
    if (!answers.q5) answers.q5 = [];
    if (checkbox.checked) {
        if (checkbox.value === 'opt_none') answers.q5 = ['opt_none'];
        else {
            answers.q5 = answers.q5.filter(v => v !== 'opt_none');
            answers.q5.push(checkbox.value);
        }
    } else {
        answers.q5 = answers.q5.filter(v => v !== checkbox.value);
    }
    renderQuestion(); 
}

function handleAnswer(qId, val) {
    answers[qId] = val;
    if (qId === 'q1_bis' && val === 'assisted') { showLazyRichExit(); return; }
    nextStep();
}

function nextStep() {
    currentStep++;
    if (currentStep >= QUESTION_FLOW.length) finishQuiz();
    else renderQuestion();
}

function finishQuiz() {
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('loading-panel').classList.remove('hidden');
    setTimeout(() => { 
        calculateResults(); 
        document.getElementById('loading-panel').classList.add('hidden');
        document.getElementById('result-panel').classList.remove('hidden');
    }, 2000);
}

// ============================================================
// 4. MOTEUR DE CALCUL
// ============================================================

function calculateResults() {
    const tier = answers.q1;
    const skill = answers.q2;
    const handicap = answers.q2_bis === 'handicap';
    const threat = answers.q4;
    const risks = answers.q5 || [];
    const legacy = answers.q6;
    const trust = answers.q8;
    const isNomad = answers.q3_bis === 'nomad';

    // 1. STRATÉGIE
    let archTitle = T.arch_single;
    let archDesc = T.arch_single_desc;
    let warnings = [];
    let isShamir = false;
    let isMultisig = false;

    if (tier === '3' && skill === 'intermediate' && legacy !== 'legal' && legacy !== 'tech_heir') {
        archTitle = T.arch_shamir;
        archDesc = T.arch_shamir_desc;
        warnings.push(T.warn_shamir);
        isShamir = true;
    } 
    else if ((threat === 'decoy' || threat === 'dk') || risks.includes('opt_social')) {
        archTitle = T.arch_passphrase;
        archDesc = T.arch_passphrase_desc;
        warnings.push(T.warn_passphrase);
    } 
    else if (tier === '3' && legacy === 'family') {
        archTitle = T.arch_liana;
        archDesc = T.arch_liana_desc;
    } 
    else if (threat === 'bunker') {
        archTitle = T.arch_multisig;
        archDesc = T.arch_multisig_desc;
        isMultisig = true;
    }

    // 2. MÉTAL
    let validMetals = [];
    if (isShamir) {
        validMetals = DB_METAL.filter(m => m.shamir === true);
        if (risks.includes('opt_fire_ext') || tier === '3') {
            validMetals = validMetals.filter(m => m.material.includes('Titane'));
        }
    } else {
        validMetals = DB_METAL.filter(m => m.shamir === false);
        if (risks.includes('opt_fire_ext')) {
            validMetals = validMetals.filter(m => m.material.includes('Titane'));
        } else if (risks.includes('opt_water')) {
            validMetals = validMetals.filter(m => m.material.includes('316') || m.material.includes('Titane'));
        }
    }
    if (validMetals.length === 0) validMetals = [DB_METAL[2]];
    validMetals.sort((a, b) => a.price - b.price);

    // 3. HARDWARE SCORING
    let scoredWallets = DB_WALLETS.map(w => {
        let score = 100;
        
        if (handicap && (w.screen === 'small' || w.screen === 'mid')) score -= 2000;
        if (answers.q3 === 'ios' && skill === 'beginner' && !w.features.includes('ble') && w.id !== 'keystone3') score -= 2000;
        if (trust === 'dice' && !w.features.includes('dice')) score -= 500;
        if (isNomad && !w.features.includes('stealth')) score -= 50;
        if (answers.q7 === 'no_kyc' && !w.features.includes('opensource')) score -= 200;

        if (skill === 'beginner' && w.skill === 'beginner') score += 50;
        if (skill === 'expert' && w.skill === 'expert') score += 50;
        if (isShamir && w.features.includes('shamir')) score += 150;
        if (tier === '3' && w.features.includes('airgap')) score += 30;
        if (w.id === 'bitkey') {
            if (skill === 'beginner' && threat !== 'bunker' && answers.q7 !== 'no_kyc') score += 80;
            else score -= 500;
        }
        return { ...w, score };
    });

    scoredWallets.sort((a, b) => b.score - a.score);
    const validWallets = scoredWallets.filter(w => w.score > 0);

    renderResultsUI(archTitle, archDesc, validWallets, validMetals, warnings, isMultisig);
}

// ------------------------------------------------------------
// GENERATEUR DE PROCÉDURES (FINAL)
// ------------------------------------------------------------
function getProcedures(arch, isMultisig) {
    let procs = [];
    
    // 1. BASE
    procs.push({ t: T.proc_setup, d: T.proc_setup_desc });
    procs.push({ t: T.proc_restore, d: T.proc_restore_desc });

    // 2. PRIVACY
    if (answers.q7 === 'no_kyc') procs.push({ t: T.proc_privacy, d: T.proc_privacy_desc, alert: true });

    // 3. ARCHITECTURE SPECIFICS
    if (arch.includes('Passphrase')) {
        procs.push({ t: T.proc_decoy, d: T.proc_decoy_desc });
        procs.push({ t: T.proc_passphrase_storage, d: T.proc_passphrase_storage_desc });
    }
    if (isMultisig) procs.push({ t: T.proc_multisig, d: T.proc_multisig_desc, alert: true });
    if (arch.includes('Liana')) procs.push({ t: T.proc_liana, d: T.proc_liana_desc });

    // 4. EXPERT & NOMAD
    if (answers.q8 === 'dice') procs.push({ t: T.proc_entropy, d: T.proc_entropy_desc });
    if (answers.q3_bis === 'nomad') procs.push({ t: T.proc_border, d: T.proc_border_desc });

    // 5. SUCCESSION
    const legacy = answers.q6;
    
    if (legacy === 'legal') {
        procs.push({ t: T.proc_legacy_legal, d: T.proc_legacy_legal_desc });
    }
    
    if (legacy === 'family') {
        procs.push({ t: T.proc_family, d: T.proc_family_desc });
    }

    // 6. FIX DEAD-END (PASSPHRASE + HÉRITAGE)
    if (arch.includes('Passphrase') && legacy !== 'none') {
        procs.push({ t: T.proc_passphrase_legacy, d: T.proc_passphrase_legacy_desc, alert: true });
    }

    // 7. MAINTENANCE
    procs.push({ t: T.proc_health, d: T.proc_health_desc });

    return procs;
}

function renderResultsUI(arch, archDesc, wallets, metals, warnings, isMultisig) {
    const container = document.getElementById('result-content');
    
    // --- COLUMNS & SORTING ---
    let cols = [
        { id: 'tactile', lbl: 'Tactile/Clavier', icon: 'fa-keyboard', weight: 10 },
        { id: 'secure_element', lbl: 'Puce Sécu.', icon: 'fa-microchip', weight: 10 },
        { id: 'stealth', lbl: 'Discret', icon: 'fa-eye-slash', weight: 5 },
        { id: 'opensource', lbl: 'Open Source', icon: 'fa-code', weight: 10 },
        { id: 'airgap', lbl: 'AirGap', icon: 'fa-wifi', weight: 10 },
        { id: 'btc_only', lbl: 'BTC Only', icon: 'fa-bitcoin', weight: 10 },
        { id: 'ble', lbl: 'Bluetooth', icon: 'fa-brands fa-bluetooth', weight: 5 },
        { id: 'nfc', lbl: 'NFC', icon: 'fa-mobile-signal', weight: 5 },
        { id: 'tor', lbl: 'Tor', icon: 'fa-user-secret', weight: 5 },
        { id: 'shamir', lbl: 'Shamir', icon: 'fa-puzzle-piece', weight: 5 }
    ];

    if (arch.includes('Passphrase')) {
        cols.find(c => c.id === 'tactile').weight += 100;
        cols.find(c => c.id === 'secure_element').weight += 80;
    }
    if (answers.q1 === '3') {
        cols.find(c => c.id === 'airgap').weight += 100;
        cols.find(c => c.id === 'btc_only').weight += 80;
    }
    if (answers.q3 === 'ios') {
        cols.find(c => c.id === 'ble').weight += 150;
    }
    if (answers.q7 === 'no_kyc') {
        cols.find(c => c.id === 'opensource').weight += 100;
        cols.find(c => c.id === 'tor').weight += 50;
    }
    if (arch.includes('Shamir')) {
        cols.find(c => c.id === 'shamir').weight += 200;
    }

    cols.sort((a, b) => b.weight - a.weight);

    // --- HTML GENERATION ---
    let matrixHtml = '';
    if (wallets.length === 0) {
        matrixHtml = '<div class="text-red-400 p-4 border border-red-500 rounded bg-slate-800">Aucun matériel compatible.</div>';
    } else {
        let thead = `<th class="th-model">Modèle</th>` + cols.map(c => `<th><div class="flex flex-col items-center gap-1"><i class="fa-solid ${c.icon} text-slate-500 text-lg"></i><span>${c.lbl}</span></div></th>`).join('');
        
        let tbody = wallets.map(w => {
            let cells = cols.map(c => {
                let val = '-';
                let has = false;
                
                if (c.id === 'btc_only') {
                    if(w.btc_only) { has = true; }
                    else if(w.features.includes('btc_only_opt')) { val = 'Opt'; has=true; }
                } 
                else if (c.id === 'tactile' && w.features.includes('keyboard')) {
                    val = '<i class="fa-solid fa-keyboard text-green-500"></i>'; has = true; 
                }
                else {
                    if (w.features.includes(c.id)) has = true;
                }

                if (has && val === '-') val = '<i class="fa-solid fa-check text-green-500"></i>';
                if (!has) val = '<span class="text-slate-700">-</span>';
                if (val === 'Opt') val = '<span class="text-yellow-500 text-xs">Opt</span>';

                return `<td>${val}</td>`;
            }).join('');

            return `<tr><td class="td-model"><div class="font-bold text-white">${w.name}</div><div class="text-[10px] text-slate-400 mt-1">${w.desc}</div></td>${cells}</tr>`;
        }).join('');

        matrixHtml = `<div class="matrix-container"><table class="matrix-table"><thead><tr>${thead}</tr></thead><tbody>${tbody}</tbody></table></div>`;
    }

    let metalsHtml = metals.map(m => `
        <div class="bg-slate-800 p-4 rounded-lg border border-slate-700 flex justify-between items-center mb-2">
            <div>
                <div class="font-bold text-white text-sm">${m.name}</div>
                <div class="text-xs text-orange-400 font-mono">${m.material} • ${m.resistance}</div>
            </div>
            <i class="fa-solid fa-shield-halved text-slate-600"></i>
        </div>
    `).join('');

    let warnHtml = warnings.map(w => `<div class="mt-4 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded text-sm text-yellow-200 flex items-start gap-3"><i class="fa-solid fa-triangle-exclamation mt-1"></i><div>${w}</div></div>`).join('');

    // --- PROCEDURES RENDER ---
    const procedures = getProcedures(arch, isMultisig);
    let procsHtml = procedures.map((p, i) => `
        <div class="bg-slate-800 border ${p.alert ? 'border-red-500' : 'border-slate-700'} rounded-xl p-6 flex gap-5 hover:border-slate-600 transition-colors">
            <div class="text-2xl font-bold opacity-50 ${p.alert ? 'text-red-500' : 'text-slate-600'}">${i+1}</div>
            <div>
                <div class="font-bold text-white mb-1 ${p.alert ? 'text-red-400' : ''}">${p.t}</div>
                <div class="text-sm text-slate-400 leading-relaxed">${p.d}</div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="glass-panel p-8 rounded-xl border-t-4 border-blue-500 mb-10 bg-slate-800/90 shadow-2xl">
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-500/10 rounded-lg text-blue-400"><i class="fa-solid fa-chess-rook text-xl"></i></div>
                <h3 class="text-blue-400 text-xs font-bold uppercase tracking-widest">${T.res_arch_title}</h3>
            </div>
            <div class="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">${arch}</div>
            <p class="text-lg text-slate-300 leading-relaxed max-w-3xl">${archDesc}</p>
            ${warnHtml}
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div class="lg:col-span-2 space-y-6">
                <div class="section-header border-slate-500"><i class="fa-solid fa-list-check"></i> ${T.res_proc_title}</div>
                ${procsHtml}
            </div>

            <div class="h-fit">
                <div class="section-header border-slate-400"><i class="fa-solid fa-shield-halved"></i> ${T.res_metal_title}</div>
                <div class="glass-panel p-4 rounded-xl bg-slate-800/90">
                    <div class="mb-4 text-xs text-slate-400">Modèles compatibles avec votre profil de risque (Triés par prix) :</div>
                    ${metalsHtml}
                </div>
            </div>
        </div>

        <div>
            <div class="section-header border-orange-500"><i class="fa-solid fa-microchip"></i> ${T.res_hw_title}</div>
            ${matrixHtml}
        </div>
    `;
}

function showLazyRichExit() {
    // ... Code identical to V2.6
    document.getElementById('quiz-panel').classList.add('hidden');
    document.getElementById('result-panel').classList.remove('hidden');
    document.getElementById('result-content').innerHTML = `
        <div class="text-center p-10 max-w-2xl mx-auto">
            <i class="fa-solid fa-handshake-angle text-6xl text-blue-500 mb-6"></i>
            <h2 class="text-3xl font-bold text-white mb-4">${T.exit_lazy}</h2>
            <p class="text-lg text-slate-300 mb-8">${T.exit_lazy_desc}</p>
            <div class="bg-slate-800 p-6 rounded-xl text-left border border-slate-700">
                <div class="font-bold text-white mb-4">${T.exit_lazy_sol}</div>
                <div class="space-y-4">
                    <div class="flex gap-4">
                        <div class="bg-blue-900/30 p-3 rounded h-fit text-blue-400"><i class="fa-solid fa-gem"></i></div>
                        <div>
                            <div class="text-white font-bold">Casa Premium / Private</div>
                            <div class="text-sm text-slate-400">Le standard pour les patrimoines élevés. Support humain 24/7.</div>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="bg-green-900/30 p-3 rounded h-fit text-green-400"><i class="fa-solid fa-shield-cat"></i></div>
                        <div>
                            <div class="text-white font-bold">Nunchuk Honey Badger</div>
                            <div class="text-sm text-slate-400">Souveraineté maximale, Zero KYC, Idéal pour la privacy.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}