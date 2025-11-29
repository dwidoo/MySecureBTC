const KB = {
    // TEXTES & TRADUCTIONS
    LANG: {
        fr: {
            // Version texte pur pour l'onglet du navigateur (SEO)
            app_title_text: "MyBTCSecured | Architecte de Sécurité Bitcoin",
            
            // Version HTML pour le Logo (avec les couleurs et l'icône)
            app_brand_html: '<i class="fa-solid fa-shield-halved text-[#f7931a] mr-2"></i>MyBTC<span class="text-[#f7931a]">Secured</span>',
            
            loading_1: "Analyse des vecteurs d'attaque...",
            loading_2: "Sélection des architectures cryptographiques...",
            loading_3: "Construction du protocole de sécurité...",

            q1: { text: "Si vos fonds disparaissaient demain, quel serait l'impact réel sur votre vie ?", info: "Cette réponse calibre le budget sécurité.", opt_1: "Gérable (Argent de poche / < 1 mois de salaire)", opt_2: "Douloureux (Épargne significative / Années de travail)", opt_3: "Catastrophique (Patrimoine vital / Retraite)" },
            q1_bis: { text: "Pour ce patrimoine vital, quelle est votre stratégie ?", info: "Gérer seul un gros patrimoine demande une rigueur absolue.", opt_sovereign: "Souveraineté Totale (Je me forme et je maîtrise tout)", opt_assisted: "Sécurité Assistée (Je délègue la complexité technique à des pros)" },
            q2: { text: "Quel est votre niveau technique réel ?", info: "Une procédure trop complexe mène à l'erreur (perte de fonds).", opt_beginner: "Débutant (Je veux que ça soit simple comme une app bancaire)", opt_intermediate: "Intermédiaire (Je sais suivre un tutoriel technique)", opt_expert: "Expert (L'informatique et la ligne de commande sont mes amis)" },
            q2_bis: { text: "Avez-vous des besoins d'accessibilité ?", info: "Un écran trop petit augmente le risque d'erreur de lecture d'adresse.", opt_ok: "Non, vision et dextérité standards", opt_handicap: "Oui, j'ai besoin d'un grand écran et d'une ergonomie adaptée" },
            q3: { text: "Quel appareil utiliserez-vous pour gérer vos transactions ?", info: "Le choix du matériel dépendra de sa connectique.", opt_ios: "iPhone (iOS)", opt_android: "Android", opt_desktop: "Ordinateur (Mac / PC / Linux)" },
            q3_bis: { text: "Voyagez-vous internationalement avec vos clés ?", info: "Passer les frontières avec du matériel visible peut être risqué.", opt_static: "Non, le matériel reste en lieu sûr", opt_nomad: "Oui, je voyage (Risque douanier)" },
            q4: { text: "Contre quelle menace physique souhaitez-vous vous prémunir ?", info: "La 'Clé à molette' (torture) contourne la cryptographie.", opt_low: "Vol simple (Cambriolage en mon absence)", opt_decoy: "Agression (Je veux pouvoir donner un 'faux' code PIN)", opt_bunker: "Séquestration (Impossible de payer immédiatement)", opt_dk: "Je ne sais pas (Par défaut : Mode Leurre recommandé)" },
            q5: { text: "Contre quels risques souhaitez-vous protéger vos 12 ou 24 mots ?", info: "Sélectionnez TOUS les risques, même faibles.", opt_fire_std: "Incendie Domestique Standard (~600°C)", opt_fire_ext: "Incendie Extrême / Industriel (>1000°C)", opt_water: "Inondation / Corrosion (Eau salée / Cave humide)", opt_social: "Indiscrétion (Je ne veux pas qu'on puisse lire mes mots)", opt_none: "Aucun (Coffre bancaire sécurisé)" },
            q6: { text: "Avez-vous organisé la transmission de vos bitcoins (Décès) ?", info: "Sans plan explicite, vos bitcoins sont perdus à jamais.", opt_none: "Non (Risque de perte totale accepté)", opt_legal: "Oui, via un tiers légal (Notaire/Avocat)", opt_tech_heir: "Oui, j'ai un proche technique qui sait faire", opt_family: "Oui, j'ai des héritiers mais ils ne sont pas techniques" },
            q7: { text: "Origine des fonds & Confidentialité (Privacy) :", info: "Pour les fonds No-KYC, évitez les outils connectés aux serveurs centraux.", opt_kyc: "Achat standard (Plateforme avec identité)", opt_no_kyc: "Achat anonyme / Minage (Je veux préserver mon anonymat)", opt_dk: "Je ne sais pas (Option recommandée : Standard)" },
            q8: { text: "Génération de la clé privée (Entropie) :", info: "C'est la naissance de votre secret. Comment voulez-vous le créer ?", opt_chip: "Automatique (Puce Sécurisée) - Rapide.", opt_dice: "Manuelle (Lancer de dés) - Souveraineté mathématique.", opt_dk: "Je ne sais pas (Option recommandée : Automatique)" },

            res_arch_title: "Dispositif de Sécurité (Stratégie)",
            res_hw_title: "Matériel Compatible Recommandé",
            res_metal_title: "Solutions de Sauvegarde Métal",
            res_proc_title: "Procédures Opérationnelles",
            
            arch_single: "Standard Single-Sig",
            arch_single_desc: "Une clé unique (12 ou 24 mots). C'est la fondation de la sécurité personnelle. Simple à gérer, simple à restaurer.",
            arch_passphrase: "Single-Sig + Passphrase (Leurre)",
            arch_passphrase_desc: "Vous ajoutez une 'Passphrase' à votre Seed. Cela crée deux portefeuilles : un 'Leurre' (PIN simple) avec peu de fonds, et le 'Vrai' (PIN secret) avec votre trésor.",
            arch_multisig: "Multisig Distribué (2-sur-3)",
            arch_multisig_desc: "Le coffre-fort numérique. Il faut 2 clés sur 3 pour bouger l'argent. Idéal pour les gros montants.",
            arch_liana: "Time-Lock (Héritage Automatisé)",
            arch_liana_desc: "Utilisation du protocole Liana. Si je n'utilise pas mes fonds pendant 1 an, une clé de secours s'active.",
            arch_shamir: "Shamir Backup (SLIP-39)",
            arch_shamir_desc: "Votre graine est divisée mathématiquement en X parts. Offre de la redondance sans la complexité du Multisig.",

            warn_shamir: "Note : Le Shamir (SLIP-39) vous lie aux marques compatibles (Trezor, Keystone).",
            warn_passphrase: "Attention critique : Si vous oubliez votre Passphrase, les fonds sont perdus à jamais.",
            
            exit_lazy: "Recommandation : Garde Collaborative",
            exit_lazy_desc: "Votre patrimoine justifie une assistance humaine.",
            exit_lazy_sol: "Solutions de Confiance",

            proc_setup: "Initialisation Propre",
            proc_setup_desc: "Vérifiez les scellés du colis. Mettez à jour le firmware. Ne tapez jamais les mots sur un clavier.",
            proc_restore: "Test de Restauration",
            proc_restore_desc: "Avant d'envoyer la totalité des fonds : envoyez un petit montant, effacez le wallet, et restaurez-le pour valider.",
            proc_decoy: "Configuration Leurre",
            proc_decoy_desc: "Mettez ~5% des fonds sur le PIN standard (Leurre). Mettez le reste sur le PIN secret lié à la Passphrase.",
            proc_entropy: "Entropie Manuelle",
            proc_entropy_desc: "Effectuez 100 lancers de dés. Convertissez en binaire. Ne faites pas confiance à la génération automatique.",
            proc_border: "Passage de Frontière",
            proc_border_desc: "Ne voyagez pas avec votre métal. Utilisez un 'Border Wallet' (SeedXOR ou Cloud Chiffré temporaire) pour passer la douane 'nu'.",
            proc_privacy: "Hygiène Privacy (No-KYC)",
            proc_privacy_desc: "Attention : N'utilisez JAMAIS Ledger Live ou Trezor Suite par défaut en No-KYC. Ils exposent vos adresses IP et XPUB. Utilisez Sparrow Wallet + Tor.",
            proc_multisig: "Sauvegarde Descripteurs",
            proc_multisig_desc: "CRITIQUE : En Multisig, les 12 mots ne suffisent pas ! Vous devez sauvegarder le fichier de configuration (Descripteurs / xPubs) de TOUS les co-signataires, sinon la restauration est impossible.",
            proc_liana: "Maintenance Time-Lock",
            proc_liana_desc: "Connectez-vous au moins une fois tous les 6 mois pour 'rafraîchir' le contrat intelligent et empêcher le déclenchement involontaire de l'héritage.",
            proc_legacy_legal: "Lettre au Tiers de Confiance",
            proc_legacy_legal_desc: "Rédigez un document indiquant OÙ se trouvent les éléments (Clé A, Clé B, Passphrase), sans jamais écrire les codes eux-mêmes.",
            proc_family: "Kit de Secours Familial",
            proc_family_desc: "Créez une fiche A4 pour vos proches : 'En cas de décès, contactez [Expert]. Mes clés sont dans [Coffre].' Ne mettez pas les mots sur cette fiche.",
            proc_passphrase_legacy: "Transmission Passphrase (DANGER)",
            proc_passphrase_legacy_desc: "Vous utilisez une Passphrase ET vous avez des héritiers. Vous DEVEZ écrire cette Passphrase sur un support (papier/métal) séparé de la Seed, et le confier à une personne différente (ou coffre bancaire).",
            proc_passphrase_storage: "Stockage Passphrase",
            proc_passphrase_storage_desc: "Ne stockez JAMAIS la Passphrase au même endroit que la Seed (sinon le leurre est inutile). Mémorisez-la ou gravez-la sur une plaque séparée.",
            proc_test_multisig: "Répétition Générale",
            proc_test_multisig_desc: "Avant de transférer le gros montant : créez le multisig, envoyez 0.01 BTC, effacez tout, restaurez, et dépensez.",
            proc_health: "Vérification Annuelle",
            proc_health_desc: "Une fois par an : allumez le wallet (mise à jour), vérifiez que vous connaissez toujours vos codes PIN, et vérifiez l'état physique de votre sauvegarde métal.",
            // --- SECTION JURIDIQUE / DISCLAIMER ---
            legal_title: "Avertissement Légal",
            legal_p1: "<strong>1. Outil Pédagogique :</strong> Ce site est un outil d'aide à la décision algorithmique. Il ne constitue EN AUCUN CAS un conseil en investissement financier, ni un audit de sécurité professionnel.",
            legal_p2: "<strong>2. Responsabilité :</strong> La sécurité de vos actifs dépend de votre rigueur. L'éditeur décline toute responsabilité en cas de perte de fonds, vol, ou défaillance matérielle.",
            legal_p3: "<strong>3. Transparence :</strong> Le code source est disponible pour audit. Les recommandations sont basées sur des critères techniques objectifs.",
            legal_p4: "<strong>4. Acceptation :</strong> L'outil est fourni 'tel quel' sans garantie. En continuant, vous acceptez d'utiliser ces informations à vos propres risques.",
            legal_checkbox: "J'ai lu et j'accepte les conditions d'utilisation.",
            legal_btn_start: "Accéder au Diagnostic",
            
            // --- SECTION INTRO (Pour ne pas avoir de texte en dur sur la home) ---
            hero_title_1: "Protégez vos bitcoins.",
            hero_title_2: "Sans faille.",
            hero_desc: "Obtenez votre <strong>protocole de sécurité personnalisé en 2 minutes</strong>. Que vous soyez débutant ou expert, cet outil conçoit l'architecture idéale (Matériel + Sauvegarde + Procédures).",
            hero_btn: "Démarrer le diagnostic",
            
            // BLOCS RASSURANCE
            block_anon_title: "100% Anonyme",
            block_anon_desc: "Architecture 'Zero-Knowledge'. Tout le calcul se fait localement. Aucune donnée n'est envoyée à un serveur.",
            block_agnostic_title: "Agnostique",
            block_agnostic_desc: "Matériel recommandé parmi 30+ références (Wallet + Métal) basées uniquement sur vos contraintes.",
            block_full_title: "Complet",
            block_full_desc: "Architecture + Matériel + Sauvegarde + Procédures. Une approche holistique de la sécurité.",
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
    { id: 'ngrave_graphene', name: 'NGRAVE Graphene', material: 'Acier + Solution', resistance: 'A+ (>1400°C)', shamir: true }
    ]
};