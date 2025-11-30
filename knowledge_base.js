const KB = {
    // TEXTES & TRADUCTIONS
    LANG: {
        fr: {
            app_title_text: "MyBTCSecured | Architecte de Sécurité Bitcoin",
            app_brand_html: '<i class="fa-solid fa-shield-halved text-[#f7931a] mr-2"></i>MyBTC<span class="text-[#f7931a]">Secured</span>',
            
            // Loaders
            loading_1: "Analyse des vecteurs d'attaque...",
            loading_2: "Sélection du matériel compatible...",
            loading_3: "Génération du protocole de sécurité...",

            // --- QUESTIONS (Reformulées pour être rassurantes et claires) ---
            q1: { 
                text: "Si vous perdiez l'accès à vos bitcoins demain, quel serait l'impact ?", 
                info: "Permet de calibrer le budget et la complexité de sécurité nécessaire.", 
                opt_1: "Gérable (Somme modeste / Argent de poche)", 
                opt_2: "Douloureux (Épargne significative)", 
                opt_3: "Vital (Patrimoine de vie / Retraite)" 
            },
            q1_bis: { 
                text: "Pour gérer ce patrimoine, quelle est votre approche ?", 
                info: "L'autonomie totale demande de la rigueur. L'assistance réduit le risque d'erreur technique.", 
                opt_sovereign: "Autonomie (Je veux maîtriser la technique de A à Z)", 
                opt_assisted: "Sécurité Assistée (Je préfère déléguer la complexité technique)" 
            },
            q2: { 
                text: "Quel est votre niveau de confort avec l'informatique ?", 
                info: "Un protocole trop complexe pour votre niveau augmente le risque de fausse manœuvre.", 
                opt_beginner: "Standard (Je veux une interface simple et guidée)", 
                opt_intermediate: "Intermédiaire (Je sais suivre un tutoriel technique)", 
                opt_expert: "Avancé (Ligne de commande, PGP, compilation...)" 
            },
            q2_bis: { 
                text: "Avez-vous des contraintes physiques (Vue ou Dextérité) ?", 
                info: "Une mauvaise vue ou des tremblements (mains) augmentent radicalement le risque d'erreur lors de la copie d'adresses.", 
                opt_ok: "Non, vision et motricité standards", 
                opt_handicap: "Oui (J'ai besoin d'un grand écran ou d'une interface très aérée)" 
            },            
            q3: { text: "Quel appareil utiliserez-vous pour gérer vos transactions ?", info: "Détermine la connectique du matériel (USB-C, Lightning, Bluetooth...).", opt_ios: "iPhone (iOS)", opt_android: "Android", opt_desktop: "Ordinateur (Mac / Windows / Linux)" },
            q3_bis: { text: "Ce matériel devra-t-il passer des frontières ?", info: "Voyager avec un hardware wallet physique peut attirer l'attention aux contrôles de sécurité.", opt_static: "Non, stockage sédentaire (Domicile/Coffre)", opt_nomad: "Oui, je prévois de voyager avec (Risque douanier)" },
            q4: { 
                text: "Contre quelle menace physique souhaitez-vous une protection ?", 
                info: "Si une personne malveillante vous force à déverrouiller votre appareil.", 
                opt_low: "Vol simple (Cambriolage en mon absence)", 
                opt_decoy: "Contrainte (Je veux pouvoir donner un 'faux' code PIN crédible)", 
                opt_bunker: "Séquestration (Impossible de payer même sous la menace)", 
                opt_dk: "Je ne sais pas (Recommandé : Mode Leurre)" 
            },
            q5: { text: "Quels risques environnementaux pèsent sur votre sauvegarde (Mots) ?", info: "Le papier brûle. L'encre s'efface. Sélectionnez tous les risques potentiels.", opt_fire_std: "Incendie Domestique (~600°C)", opt_fire_ext: "Incendie Extrême / Industriel (>1000°C)", opt_water: "Inondation / Humidité / Corrosion", opt_social: "Indiscrétion (Je veux que mes mots soient illisibles pour un tiers)", opt_none: "Aucun (Coffre bancaire sécurisé)" },
            q6: { text: "Avez-vous organisé la transmission de vos actifs (Succession) ?", info: "Sans protocole explicite, vos bitcoins risquent d'être perdus en cas de décès.", opt_none: "Non (Risque accepté pour l'instant)", opt_legal: "Oui, via un tiers de confiance (Notaire/Avocat)", opt_tech_heir: "Oui, j'ai un proche compétent techniquement", opt_family: "Oui, j'ai des héritiers mais ils sont néophytes" },
            q7: { text: "Quelle importance accordez-vous à la confidentialité (Privacy) ?", info: "Détermine le choix des logiciels pour éviter de lier votre identité à vos fonds.", opt_kyc: "Standard (J'utilise des plateformes régulées)", opt_no_kyc: "Élevée (Je veux minimiser mes traces numériques)", opt_dk: "Je ne sais pas" },
            q8: { text: "Génération de la clé privée (Le Secret) :", info: "Comment souhaitez-vous créer la suite de mots mathématique ?", opt_chip: "Automatique (Confiance dans le matériel)", opt_dice: "Manuelle (Lancer de dés - Aléa physique)", opt_dk: "Automatique (Recommandé)" },

            // --- RESULTATS ---
            res_arch_title: "Architecture de Sécurité",
            res_hw_title: "Sélection Matérielle Compatible",
            res_metal_title: "Support de Sauvegarde (Métal)",
            res_proc_title: "Procédures Opérationnelles",
            
            // Descriptions des architectures
            arch_single: "Standard Single-Sig",
            arch_single_desc: "L'architecture de référence. Vous possédez une clé unique (12 ou 24 mots). C'est le meilleur équilibre sécurité/complexité pour débuter.",
            arch_passphrase: "Single-Sig + Passphrase (Leurre)",
            arch_passphrase_desc: "Architecture avancée. Vous ajoutez un mot de passe mémorisé à votre sauvegarde. Cela génère deux portefeuilles : un 'leurre' pour le quotidien, et un 'secret' pour l'épargne.",
            arch_multisig: "Multisig Distribué (2-sur-3)",
            arch_multisig_desc: "Le coffre-fort numérique. Nécessite 2 clés sur 3 pour autoriser une transaction. Protection maximale contre le vol, mais plus complexe à gérer.",
            arch_liana: "Time-Lock (Héritage Automatisé)",
            arch_liana_desc: "Utilisation du protocole Liana. Si les fonds ne bougent pas pendant une période définie (ex: 1 an), une clé de secours s'active automatiquement pour vos héritiers.",
            arch_shamir: "Shamir Backup (Fragmentation)",
            arch_shamir_desc: "Votre clé est divisée mathématiquement en plusieurs éclats. Aucun éclat seul ne permet d'accéder aux fonds. Offre une redondance physique robuste.",

            warn_shamir: "Note : Le standard Shamir (SLIP-39) restreint le choix de matériel compatible.",
            warn_passphrase: "Point d'attention : Si vous oubliez la Passphrase, les fonds du portefeuille secret sont perdus à jamais.",
            
            exit_lazy: "Recommandation : Garde Collaborative",
            exit_lazy_desc: "Au vu de l'importance du patrimoine et de votre souhait d'assistance, la gestion solo présente un risque. La garde collaborative permet d'avoir un tiers de sécurité.",
            exit_lazy_sol: "Solutions Recommandées",

            // Procédures (Titres plus actionnables)
            proc_setup: "Initialisation Sécurisée",
            proc_setup_desc: "Vérifiez l'intégrité du packaging. Mettez à jour le firmware. Ne saisissez jamais vos mots sur un appareil connecté (Ordi/Tel).",
            proc_restore: "Test de Restauration (Obligatoire)",
            proc_restore_desc: "Avant tout dépôt important : envoyez un petit montant, réinitialisez le matériel, et restaurez-le avec vos mots pour valider la sauvegarde.",
            proc_decoy: "Mise en place du Leurre",
            proc_decoy_desc: "Stockez une petite somme (~5%) sur le code PIN standard. Stockez le reste sur le code PIN secret lié à la Passphrase.",
            proc_entropy: "Entropie par les Dés",
            proc_entropy_desc: "Utilisez 100 lancers de dés pour générer votre clé. Cela garantit que le secret est purement mathématique et inconnu du fabricant.",
            proc_border: "Passage de Frontière",
            proc_border_desc: "Ne voyagez pas avec votre sauvegarde principale. Utilisez un 'Border Wallet' ou une solution temporaire pour passer les contrôles 'nu'.",
            proc_privacy: "Connexion Privée",
            proc_privacy_desc: "Évitez les logiciels par défaut en mode standard. Couplez votre matériel à un logiciel comme Sparrow Wallet via le réseau Tor.",
            proc_multisig: "Sauvegarde des Descripteurs",
            proc_multisig_desc: "CRITIQUE : En Multisig, sauvegarder les mots ne suffit pas. Vous devez impérativement sauvegarder le fichier de configuration (XPUBS) de tous les participants.",
            proc_liana: "Rafraîchissement Time-Lock",
            proc_liana_desc: "Connectez-vous au moins une fois par an pour signer une transaction et repousser l'activation automatique du plan d'héritage.",
            proc_legacy_legal: "Instructions au Tiers",
            proc_legacy_legal_desc: "Rédigez un document indiquant OÙ se trouvent les éléments de sécurité, sans jamais écrire les codes ou les mots eux-mêmes.",
            proc_family: "Fiche Réflexe Famille",
            proc_family_desc: "Une fiche simple pour vos héritiers : 'Ne répondez à personne. Contactez [Nom expert]. Mes clés sont dans [Lieu physique].'",
            proc_passphrase_legacy: "Transmission Passphrase",
            proc_passphrase_legacy_desc: "La Passphrase doit être transmise via un canal différent de la sauvegarde principale (ex: Notaire ou Coffre bancaire distinct).",
            proc_passphrase_storage: "Stockage Passphrase",
            proc_passphrase_storage_desc: "Ne stockez jamais la Passphrase avec la liste de mots. Mémorisez-la ou gravez-la sur un support métal caché séparément.",
            proc_test_multisig: "Répétition Générale",
            proc_test_multisig_desc: "Effectuez un cycle complet (Création > Effacement > Restauration > Dépense) avec un montant minime avant de sécuriser le reste.",
            proc_health: "Audit Annuel",
            proc_health_desc: "Une fois par an : vérifiez la lisibilité de vos sauvegardes métal et testez vos codes d'accès.",

            // --- JURIDIQUE ---
            legal_title: "Avertissement & Sécurité",
            legal_p1: "<strong>1. Outil d'aide à la décision :</strong> Ce site fournit des recommandations basées sur des bonnes pratiques de sécurité informatique. Il ne constitue pas un conseil financier.",
            legal_p2: "<strong>2. Responsabilité :</strong> La sécurité est une démarche active. L'éditeur décline toute responsabilité en cas de perte de fonds, de vol ou de défaillance technique.",
            legal_p3: "<strong>3. Transparence :</strong> Le code source est public pour permettre à chacun de vérifier l'absence de collecte de données.",
            legal_p4: "<strong>4. Utilisation :</strong> En continuant, vous acceptez d'utiliser ces informations à vos propres risques.",
            
            // NOUVEAUX TEXTES POUR LES CHECKBOXES
            legal_checkbox_offline: "J'ai compris que je peux désactiver ma connexion internet (Mode Avion) dès maintenant pour une sécurité maximale.",
            legal_checkbox_terms: "J'ai lu et j'accepte les conditions d'utilisation.",
            
            // Indicateurs de statut dans la modale
            status_online: "Connecté (Standard)",
            status_offline: "Hors-ligne (Recommandé)",

            legal_btn_start: "Lancer le diagnostic",
            
            // --- HERO & HOME ---
            hero_title_1: "Protégez vos bitcoins.",
            hero_title_2: "Sans faille.",
            hero_desc: "Définissez votre <strong>dispositif de sécurité personnalisé</strong> en quelques minutes. Obtenez une recommandation complète (Matériel + Sauvegarde + Procédures) adaptée à votre situation réelle.",
            hero_btn: "Configurer mon dispositif",
            
            // BLOCS RASSURANCE (Modifiés pour l'affiliation future)
            block_anon_title: "Confidentialité Totale",
            block_anon_desc: "Tout le calcul s'effectue sur votre navigateur. Aucune donnée personnelle n'est envoyée sur un serveur. Fonctionne hors-ligne.",
            block_agnostic_title: "Sélection Technique",
            block_agnostic_desc: "Les matériels et solutions proposés sont sélectionnés sur la base stricte de leurs fonctionnalités de sécurité (Code source, Élément sécurisé, Airgap).",
            block_full_title: "Code Vérifiable",
            block_full_desc: "Le code source de cet outil est public. Conformément à la philosophie Bitcoin ('Don't Trust, Verify'), vous pouvez l'auditer librement.",
            
            footer_github: "Code Source (GitHub)"
        }
    },
    
    // BASE DE DONNÉES PRODUITS
    WALLETS: [
        { 
            id: 'coldcard_q1', name: 'Coldcard Q1', 
            features: ['airgap', 'keyboard', 'stealth', 'btc_only', 'dice', 'opensource', 'secure_element', 'nfc', 'tor'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 199,
            desc: "Station AirGap ultime. Clavier QWERTY complet."
        },
        { 
            id: 'trezor_safe7', name: 'Trezor Safe 7', 
            features: ['opensource', 'tactile', 'shamir', 'ble', 'btc_only_opt', 'secure_element', 'tor'], 
            screen: 'large', skill: 'beginner', btc_only: true, price: 219,
            desc: "Standard 2025. Haptic Touch & Puce Transparente."
        },
        { 
            id: 'ledger_flex', name: 'Ledger Flex', 
            features: ['ble', 'large_screen', 'eink', 'secure_element', 'nfc'], 
            screen: 'large', skill: 'beginner', btc_only: false, price: 249,
            desc: "Écran E-Ink sécurisé. Lisibilité parfaite."
        },
        { 
            id: 'ledger_nanox', name: 'Ledger Nano X', 
            features: ['ble', 'secure_element', 'stealth'], 
            screen: 'small', skill: 'beginner', btc_only: false, price: 149,
            desc: "Format clé USB discret. Standard Bluetooth éprouvé."
        },
        { 
            id: 'bitkey', name: 'Bitkey', 
            features: ['ble', 'nfc', 'simple', 'multisig_assist', 'secure_element', 'btc_only'], 
            screen: 'none', skill: 'beginner', btc_only: true, price: 150,
            desc: "Simplicité absolue. Multisig assisté."
        },
        { 
            id: 'trezor_safe5', name: 'Trezor Safe 5', 
            features: ['opensource', 'large_screen', 'tactile', 'shamir', 'dice', 'btc_only_opt', 'secure_element', 'tor'], 
            screen: 'large', skill: 'beginner', btc_only: true, price: 169,
            desc: "L'expérience tactile 100% Open Source."
        },
        { 
            id: 'bitbox02', name: 'BitBox02 (BTC-Only)', 
            features: ['opensource', 'usb_c', 'stealth', 'btc_only', 'tor', 'dice', 'secure_element', 'tactile'], 
            screen: 'mid', skill: 'beginner', btc_only: true, price: 139,
            desc: "Discrète, Suisse, redoutable d'efficacité."
        },
        { 
            id: 'jade', name: 'Blockstream Jade', 
            features: ['airgap', 'camera', 'btc_only', 'opensource', 'tor'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 69,
            desc: "Sécurité AirGap accessible via QR Code."
        },
        { 
            id: 'keystone3', name: 'Keystone 3 Pro', 
            features: ['airgap', 'large_screen', 'fingerprint', 'shamir', 'opensource', 'secure_element', 'camera'], 
            screen: 'large', skill: 'beginner', btc_only: false, price: 129,
            desc: "Expérience Smartphone 100% AirGap."
        },
        { 
            id: 'passport', name: 'Foundation Passport', 
            features: ['airgap', 'design', 'btc_only', 'dice', 'opensource', 'secure_element', 'camera'], 
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 199,
            desc: "Design Premium Bitcoin-only."
        },
        { 
            id: 'trezor_safe3', name: 'Trezor Safe 3', 
            features: ['opensource', 'secure_element', 'shamir', 'btc_only_opt', 'tor'], 
            screen: 'small', skill: 'beginner', btc_only: true, price: 79,
            desc: "Entrée de gamme robuste."
        },
        { 
            id: 'seedsigner', name: 'SeedSigner (DIY)', 
            features: ['airgap', 'stateless', 'btc_only', 'dice', 'opensource', 'camera'], 
            screen: 'mid', skill: 'expert', btc_only: true, price: 50,
            desc: "À construire soi-même. Stateless."
        },
        { 
            id: 'ledger_stax', name: 'Ledger Stax', 
            features: ['ble', 'huge_screen', 'eink', 'secure_element', 'wireless', 'nfc'], 
            screen: 'huge', skill: 'beginner', btc_only: false, price: 399,
            desc: "Écran incurvé géant."
        },
        {"id": "tangem", "name": "Tangem Wallet (card/ring)", "features": ["secure_element", "nfc", "no_seed_option", "multicard_backup"], "screen": "none", "skill": "beginner", "btc_only": false, "price": ~60, "desc": "Format carte NFC, backup multi-cartes, EAL6+."},
        {"id": "ngrave_zero", "name": "NGRAVE Zero", "features": ["airgap", "qr_code", "secure_element_eal7", "touchscreen"], "screen": "large", "skill": "advanced", "btc_only": false, "price": 398, "desc": "100% airgap QR, EAL7, auto-destruction."},
        {"id": "ellipal_titan2", "name": "Ellipal Titan 2.0", "features": ["airgap", "qr_code", "secure_element", "large_screen"], "screen": "large", "skill": "intermediate", "btc_only": false, "price": ~199, "desc": "Airgap total QR, écran 4\"."},
        {"id": "cypherock_x1", "name": "Cypherock X1", "features": ["shamir_physical", "opensource", "no_seed_single", "multisig_assist"], "screen": "vault", "skill": "intermediate", "btc_only": false, "price": ~249, "desc": "Shamir split sur 5 cartes NFC, aucun point de défaillance unique."},
        {
            id: 'ledger_nanogen5', name: 'Ledger Nano Gen5',
            features: ['eink', 'tactile', 'ble', 'nfc', 'secure_element', 'recover_ready'],
            screen: 'large', skill: 'beginner', btc_only: false, price: 179,
            desc: "L'héritier du Nano S. Écran tactile E-Ink monochrome & NFC."
        },
        {
            id: 'bitbox02_nova', name: 'BitBox02 Nova',
            features: ['opensource', 'ble', 'glass_screen', 'secure_element', 'btc_only_opt', 'tactile'],
            screen: 'mid', skill: 'beginner', btc_only: true, price: 159,
            desc: "Évolution avec verre trempé et Bluetooth (compatible iOS)."
        },
        {
            id: 'jade_plus', name: 'Blockstream Jade Plus',
            features: ['airgap', 'camera', 'btc_only', 'opensource', 'qr', 'virtual_se'],
            screen: 'mid', skill: 'intermediate', btc_only: true, price: 149,
            desc: "Version Premium : écran IPS plus grand et meilleure caméra."
        },
        {
            id: 'passport_prime', name: 'Foundation Passport Prime',
            features: ['airgap', 'tactile', 'design', 'btc_only', 'opensource', 'secure_element', 'camera'],
            screen: 'large', skill: 'intermediate', btc_only: true, price: 299,
            desc: "Le 'Blackberry' du Bitcoin devient tactile. Finition luxe."
        },
        {
            id: 'onekey_pro', name: 'OneKey Pro',
            features: ['airgap', 'biometric', 'tactile', 'shamir', 'opensource', 'secure_element', 'qr'],
            screen: 'large', skill: 'intermediate', btc_only: false, price: 278,
            desc: "4 Éléments Sécurisés & Biométrie. Le challenger du Stax."
        },
        {
            id: 'tangem_ring', name: 'Tangem Ring',
            features: ['nfc', 'wearable', 'waterproof', 'secure_element', 'no_screen'],
            screen: 'none', skill: 'beginner', btc_only: false, price: 99,
            desc: "Bague de paiement/accès crypto. Céramique & Puce EAL6+."
        }
    ],
    // BASE DE DONNÉES METAL
    METALS: [        
    { id: 'cryptotag_zeus', name: 'Cryptotag Zeus', material: 'Titane Grade 2', resistance: 'A+ (>1660°C)', shamir: false },
    { id: 'coinkite_seedplate', name: 'Coinkite SEEDPLATE', material: 'Acier Inox 316L', resistance: 'A (~1450°C)', shamir: false },
    { id: 'hodlinox', name: 'Hodlinox (Sound Bitcoin)', material: 'Acier Inox 304', resistance: 'B (~1400°C)', shamir: false },
    { id: 'blockplate', name: 'Blockplate', material: 'Acier Inox 316', resistance: 'A (~1450°C)', shamir: false },
    { id: 'coinplate', name: 'Coinplate Alpha', material: 'Acier Inox 316L', resistance: 'A (>1400°C)', shamir: false },
    { id: 'trezor_keep_triple', name: 'Trezor Keep Metal (Triple)', material: 'Acier 304', resistance: 'A', shamir: true },
    { id: 'cryptotag_thor', name: 'Cryptotag Thor (Kit Shamir)', material: 'Titane Grade 2', resistance: 'A+ (>1660°C)', shamir: true },
    { id: 'ngrave_graphene', name: 'NGRAVE Graphene', material: 'Acier + Solution', resistance: 'A+ (>1400°C)', shamir: true },
    {"id": "billfodl", "name": "Billfodl", "material": "Acier Inox 316 marine", "resistance": "A (>1300°C réel)", "shamir": false},
    {"id": "cryptosteel_capsule", "name": "Cryptosteel Capsule Solo", "material": "Acier Inox 304", "resistance": "1400°C", "shamir": false},
    {"id": "safepal_cypher", "name": "SafePal Cypher", "material": "Acier Inox 304", "resistance": "~1400°C", "shamir": false},
    {"id": "keystone_tablet", "name": "Keystone Tablet Plus", "material": "Acier Inox 304", "resistance": "1455°C", "shamir": false},
    { id: 'safeseed_moly', name: 'Safe Seed Molybdenum', material: 'Molybdène', resistance: 'S (>2620°C)', shamir: false },
    { id: 'secux_xseed_pro', name: 'SecuX X-SEED PRO', material: 'Tungstène & Acier', resistance: 'S+ (>3400°C)', shamir: false },
    { id: 'cryptosteel_seed12', name: 'Cryptosteel Seed12', material: 'Acier Inox 304', resistance: 'A (~1450°C)', shamir: true },
    {
        "id": "stampseed_kit",
        "name": "StampSeed Titanium Stamping Kit",
        "material": "Titane Aerospace Grade",
        "resistance": "A+ (>1660°C point de fusion)",
        "shamir": true
    }

    ]
};