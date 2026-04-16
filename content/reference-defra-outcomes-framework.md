# Defra Outcomes Framework — reference extract

This file is the **full text reference** for outcomes, **outcome owners** (name + role), **joint owners**, and **Environmental Improvement Plan (EIP)** flags. It is aligned with **`app/data/outcomes.json`**, which drives the HTML prototype.

| Asset | Purpose |
|--------|---------|
| `app/data/outcomes.json` | Structured source for `/outcomes` (fields: `owner`, `owners[]`, `eip`) |
| `content/defra-outcomes-framework.md` | Shorter narrative + EIP standard wording |
| [`reference/defra-outcomes-framework-infographic.png`](reference/defra-outcomes-framework-infographic.png) | Visual hierarchy (vision, four pillars, resilience row) |

**Standard EIP sentence** (used in prototype when `eip` is `true`):

> This outcome contains targets that are part of the Environmental Improvement Plan.

---

## Defra vision

**Restoring nature, supporting growth, enhancing security**

As the steward of our natural resources, we strengthen the foundations of our economy and our national security.

---

## Secretary of State priorities → outcomes

**Intro (SoS section):** To achieve the Secretary of State’s priorities over this parliament we will deliver these outcomes:

### 1. Restoring nature while supporting development

| Outcome | Owner(s) | Role(s) | EIP in data |
|--------|----------|---------|-------------|
| Housing and infrastructure that is environmentally positive | Toby Nation | Director Environmental Quality, Infrastructure and Planning | No |
| Thriving habitats and wildlife | Deb Hankins | Director Biodiversity, Land Use and Investment | Yes |
| Thriving, productive seas | Gareth Baynham-Hughes | Director Marine and Fisheries | Yes |
| Nature accessible and enjoyable for all | Edward Barker | Director Strategy, Governance and Climate | Yes |

**Bullets (same content):**

- **Housing and infrastructure that is environmentally positive**  
  - **Outcome owner:** Toby Nation — Director Environmental Quality, Infrastructure and Planning.  
  - **EIP:** no (`eip: false` in JSON).

- **Thriving habitats and wildlife**  
  - **Outcome owner:** Deb Hankins — Director Biodiversity, Land Use and Investment.  
  - **EIP:** yes.

- **Thriving, productive seas**  
  - **Outcome owner:** Gareth Baynham-Hughes — Director Marine and Fisheries.  
  - **EIP:** yes.

- **Nature accessible and enjoyable for all**  
  - **Outcome owner:** Edward Barker — Director Strategy, Governance and Climate.  
  - **EIP:** yes.

---

### 2. Reforming our water system so it drives growth, protects consumers and enhances the environment

| Outcome | Owner(s) | Role(s) | EIP in data |
|--------|----------|---------|-------------|
| Resilient, reliable and safe supply of water to homes and businesses | David Hallam | Director Floods and Water | Yes |
| Clean rivers, lakes and seas | David Hallam | Director Floods and Water | Yes |

**Bullets:**

- **Resilient, reliable and safe supply of water to homes and businesses**  
  - **Outcome owner:** David Hallam — Director Floods and Water.  
  - **EIP:** yes.

- **Clean rivers, lakes and seas**  
  - **Outcome owner:** David Hallam — Director Floods and Water.  
  - **EIP:** yes.

---

### 3. Backing British farming and food industry to boost production

| Outcome | Owner(s) | Role(s) | EIP in data |
|--------|----------|---------|-------------|
| Profitable, productive, sustainable farming sector | Mike Rowe | Director Farming and Countryside | Yes |
| Profitable and resilient food sector that provides affordable, nutritious food | Charlotte Baker; Tessa Jones | Director Agri-Food Chain (each) | Yes |

**Bullets:**

- **Profitable, productive, sustainable farming sector**  
  - **Outcome owner:** Mike Rowe — Director Farming and Countryside.  
  - **EIP:** yes.

- **Profitable and resilient food sector that provides affordable, nutritious food**  
  - **Outcome owners:** Charlotte Baker — Director Agri-Food Chain; Tessa Jones — Director Agri-Food Chain.  
  - **EIP:** yes.  
  - *(In JSON this is an `owners` array with two entries, same role.)*

---

### 4. Resetting trading relationships, including with the EU

| Outcome | Owner(s) | Role(s) | EIP in data |
|--------|----------|---------|-------------|
| Trade barriers with the EU reduced for food, plants and animals | Mark Thompson | Director Trade Delivery and EU Reset Government Legislation | No |
| Increased trade that supports domestic production, high food standards and downward pressure on food prices | Sophie Brice | Director EU and International Trade | No |

**Bullets:**

- **Trade barriers with the EU reduced for food, plants and animals**  
  - **Outcome owner:** Mark Thompson — Director Trade Delivery and EU Reset Government Legislation.  
  - **EIP:** no (`eip: false`).

- **Increased trade that supports domestic production, high food standards and downward pressure on food prices**  
  - **Outcome owner:** Sophie Brice — Director EU and International Trade.  
  - **EIP:** no (`eip: false`).

---

## Resilience and Security outcomes

**Section title (prototype):** Resilience and Security outcomes  

**Intro (resilience section):** Defra is responsible for strengthening national security and resilience, the stewardship of critical national infrastructure and helping protect and restore critical global ecosystems.

| # | Outcome | Owner(s) | Role(s) | EIP in data |
|---|--------|----------|---------|-------------|
| 1 | Lower greenhouse gas emissions | Edward Barker | Director Strategy, Governance and Climate | Yes |
| 2 | Climate adaptation | Edward Barker | Director Strategy, Governance and Climate | Yes |
| 3 | Protection from pollution and environmental hazards | Toby Nation | Director Environmental Quality, Infrastructure and Planning | Yes |
| 4 | Minimise waste, tackle waste crime, maximise use of resources | Simon James | Director Circular Economy | Yes |
| 5 | Resilience to flooding | Sebastian Catovsky | Director Floods and Water | Yes |
| 6 | Emergency preparedness and response to environmental incidents, disease outbreaks, food and water supply shocks | Rebecca Shrubsole | Director Ministerial, Growth and Resilience | Yes |
| 7 | Robust biosecurity | Anjali Juneja | Director Animal and Plant Health and Welfare | Yes |
| 8 | Good animal welfare | Anjali Juneja | Director Animal and Plant Health and Welfare | Yes |
| 9 | Secure food supply | Charlotte Baker; Tessa Jones | Director Agri-Food Chain (each) | Yes |
| 10 | Flourishing rural communities | Edward Barker | Director Strategy, Governance and Climate | No |

**Note:** Outcome 6 is stored in JSON with **“and”** (not `&`) in the outcome text. Source copy sometimes used an ampersand; the prototype uses the JSON string for accessibility.

**Bullets (same content, with EIP):**

1. **Lower greenhouse gas emissions** — Edward Barker, Director Strategy, Governance and Climate. **EIP:** yes.  
2. **Climate adaptation** — Edward Barker, Director Strategy, Governance and Climate. **EIP:** yes.  
3. **Protection from pollution and environmental hazards** — Toby Nation, Director Environmental Quality, Infrastructure and Planning. **EIP:** yes.  
4. **Minimise waste, tackle waste crime, maximise use of resources** — Simon James, Director Circular Economy. **EIP:** yes. *(Source label “Outcomes owner” treated as Outcome owner in data.)*  
5. **Resilience to flooding** — Sebastian Catovsky, Director Floods and Water. **EIP:** yes.  
6. **Emergency preparedness and response to environmental incidents, disease outbreaks, food and water supply shocks** — Rebecca Shrubsole, Director Ministerial, Growth and Resilience. **EIP:** yes.  
7. **Robust biosecurity** — Anjali Juneja, Director Animal and Plant Health and Welfare. **EIP:** yes.  
8. **Good animal welfare** — Anjali Juneja, Director Animal and Plant Health and Welfare. **EIP:** yes.  
9. **Secure food supply** — Charlotte Baker & Tessa Jones, Directors Agri-Food Chain (two `owners` in JSON). **EIP:** yes.  
10. **Flourishing rural communities** — Edward Barker, Director Strategy, Governance and Climate. **EIP:** no (`eip: false`).

---

## Owner quick reference (alphabetical by surname)

| Surname | First name | Role | Where |
|---------|--------------|------|--------|
| Barker | Edward | Director Strategy, Governance and Climate | SoS 1 (1 outcome); Resilience 1, 2, 10 |
| Baker | Charlotte | Director Agri-Food Chain | SoS 3 (joint); Resilience 9 (joint) |
| Baynham-Hughes | Gareth | Director Marine and Fisheries | SoS 1 |
| Brice | Sophie | Director EU and International Trade | SoS 4 |
| Catovsky | Sebastian | Director Floods and Water | Resilience 5 |
| Hallam | David | Director Floods and Water | SoS 2 (both outcomes) |
| Hankins | Deb | Director Biodiversity, Land Use and Investment | SoS 1 |
| James | Simon | Director Circular Economy | Resilience 4 |
| Jones | Tessa | Director Agri-Food Chain | SoS 3 (joint); Resilience 9 (joint) |
| Juneja | Anjali | Director Animal and Plant Health and Welfare | Resilience 7, 8 |
| Nation | Toby | Director Environmental Quality, Infrastructure and Planning | SoS 1; Resilience 3 |
| Rowe | Mike | Director Farming and Countryside | SoS 3 |
| Shrubsole | Rebecca | Director Ministerial, Growth and Resilience | Resilience 6 |
| Thompson | Mark | Director Trade Delivery and EU Reset Government Legislation | SoS 4 |

---

## Analysis — patterns

### Joint / plural ownership

- **SoS priority 3** (food sector outcome) and **Resilience — secure food supply:** Charlotte Baker and Tessa Jones, same directorate (**Director Agri-Food Chain** each). Represented in JSON as `owners: [{ name, role }, …]`.

### EIP summary

- **No EIP** in JSON: SoS 1 housing only; SoS 4 both outcomes; Resilience 10 only.  
- **All other** listed outcomes: `eip: true` (standard EIP sentence in UI).

### Source quirks (normalised in JSON / UI)

- **“Outcome owners”** vs **“Outcome owner”** — grammatical only; template uses **Outcome owners** when two people.  
- **“Outcomes owner”** (waste) — treated as **Outcome owner**.  
- **Emergency preparedness `&`** — **and** in stored outcome text.

### Framing text sources

SoS intro, resilience intro, and `eipNoteText` string live in **`app/data/outcomes.json`** and should stay in step with Defra’s official publications when you update policy content.
