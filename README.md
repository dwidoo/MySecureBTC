# MySecureBTC | Bitcoin Security Architect

**Source-available code for the MySecureBTC recommendation engine.**

This repository hosts the logic and knowledge base used by [mysecurebtc.com](https://www.mysecurebtc.com). It is published for transparency and security auditing purposes.

## 🔎 What is this code?

This is not a simple wallet comparison tool. It is a **deterministic logic engine** (Engine V3.0) designed to architect a complete Bitcoin security setup based on specific user constraints.

The engine processes inputs (Asset value, Technical competence, Physical threats, Legacy needs) to generate a three-part recommendation:

1.  **Security Architecture:** Determines the optimal protocol (Single-Sig, Passphrase/Decoy, Multisig, or Time-Locked).
2.  **Hardware Selection:** Filters and scores devices based on features (Airgap, Secure Element, Open Source) against user limitations (Vision, Dexterity, OS).
3.  **Backup Medium (Metal):** Recommends specific metal supports based on environmental risks (e.g., filtering for Titanium/Molybdenum if industrial fire risk >1000°C is selected).

## 📂 Code Structure

* **`engine.js`**: Contains the scoring algorithm and decision trees. It implements "Hard Filters" (exclusion) and "Soft Scoring" (ranking) logic.
* **`knowledge_base.js`**: A standalone database containing:
    * Technical specifications for 20+ Hardware Wallets.
    * Thermal resistance data for 20+ Metal backups (Steel 304/316, Titanium, etc.).
    * Operational security procedures (OpSec) generated dynamically.


## ⚖️ License (Source Available)

**This software is NOT Open Source.** It is released under a specific **Source Available License**.

* **Access:** The source code is made available for **security auditing and transparency** only.
* **Restrictions:** You are **NOT** allowed to host a public instance, fork for commercial use, or remove copyright headers.

See the [`LICENSE`](LICENSE) file for full terms.