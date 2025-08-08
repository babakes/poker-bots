# IG88 – Poker Logic Engine

**Part of the PokerBot AI Framework**

IG88 is the decision-making engine of the bot, responsible for analyzing the game state and determining optimal poker actions based on GTO Wizard recommendations.

## 🧠 Responsibilities

- Accepts structured game state data from the state manager (C3PO)
- Queries GTO Wizard’s API (or local cache/tables)
- Returns a poker action to execute (fold, call, raise)

## ⚙️ Input Format

    {
      "hole_cards": ["Ah", "Kd"],
      "community_cards": ["2c", "Js", "9h"],
      "pot_size": 10,
      "stack_size": 100,
      "opponent_stack": 150,
      "bet_to_call": 5,
      "legal_actions": ["fold", "call", "raise"],
      "position": "btn",
      "street": "flop"
    }

## ✅ Output Format

    {
      "action": "call",
      "amount": 5
    }

## 🔌 GTO Wizard Integration

Set your API key when initializing the bot:

    bot = Ig88(gtowizard_api_key="YOUR_KEY_HERE")

## 📁 Files

- `ig88.py` — Main logic engine
- `README.md` — This file

## 🛣️ Roadmap

- [x] Define core API
- [ ] Integrate real GTO Wizard responses
- [ ] Add fallback rules
- [ ] Implement mixed strategy handling
- [ ] Enable unit tests
